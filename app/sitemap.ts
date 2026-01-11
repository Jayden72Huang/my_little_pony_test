import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { getSiteUrl } from "./[locale]/utils/site";
import { getAllCharacterSlugs } from "./[locale]/utils/characterData";
import { locales } from "../i18n";

export const runtime = "nodejs";
export const dynamic = "force-static";

function getGuideSlugs(): string[] {
  // 更新路径到 [locale] 目录
  const guidesDir = path.join(process.cwd(), "app", "[locale]", "guides");
  if (!fs.existsSync(guidesDir)) return [];

  return fs
    .readdirSync(guidesDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter((slug) => {
      const pageFile = path.join(guidesDir, slug, "page.tsx");
      return fs.existsSync(pageFile);
    })
    .sort();
}

// 生成多语言 URL
function generateMultilingualUrls(path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly"): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();
  const isoDate = new Date(now.toISOString().split('.')[0] + 'Z');

  return locales.map((locale) => {
    // 英语使用根路径，其他语言使用 /locale 前缀
    const url = locale === 'en'
      ? `${siteUrl}${path}`
      : `${siteUrl}/${locale}${path}`;

    return {
      url,
      lastModified: isoDate,
      changeFrequency,
      priority,
      // 添加 alternates 用于 hreflang
      alternates: {
        languages: Object.fromEntries(
          locales.map((loc) => [
            loc,
            loc === 'en' ? `${siteUrl}${path}` : `${siteUrl}/${loc}${path}`
          ])
        )
      }
    };
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  // 基础路由（多语言）
  const baseRoutes: MetadataRoute.Sitemap = [
    ...generateMultilingualUrls('/', 1, 'weekly'),
    ...generateMultilingualUrls('/personality-test', 0.9, 'weekly'),
    ...generateMultilingualUrls('/character-test', 0.9, 'weekly'),
    ...generateMultilingualUrls('/which-pony-are-you', 0.9, 'weekly'),
    ...generateMultilingualUrls('/characters', 0.9, 'weekly'),
    ...generateMultilingualUrls('/guides', 0.8, 'weekly'),
    ...generateMultilingualUrls('/privacy', 0.5, 'yearly'),
    ...generateMultilingualUrls('/terms', 0.5, 'yearly'),
  ];

  // 角色页面（多语言）
  const characterRoutes: MetadataRoute.Sitemap = getAllCharacterSlugs().flatMap((slug) =>
    generateMultilingualUrls(`/characters/${slug}`, 0.9, 'monthly')
  );

  // 指南页面（多语言）
  const guideRoutes: MetadataRoute.Sitemap = getGuideSlugs().flatMap((slug) =>
    generateMultilingualUrls(`/guides/${slug}`, 0.7, 'monthly')
  );

  return [...baseRoutes, ...characterRoutes, ...guideRoutes];
}


