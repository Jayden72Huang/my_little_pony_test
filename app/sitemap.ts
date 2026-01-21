import { MetadataRoute } from 'next';
import { getSiteUrl } from './[locale]/utils/site';
import { getAllCharacterSlugs } from './[locale]/utils/characterData';
import { locales } from '../i18n';
import fs from 'node:fs';
import path from 'node:path';

function getGuideSlugs(): string[] {
  const guidesDir = path.join(process.cwd(), 'app', '[locale]', 'guides');
  if (!fs.existsSync(guidesDir)) return [];

  return fs
    .readdirSync(guidesDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter((slug) => {
      const pageFile = path.join(guidesDir, slug, 'page.tsx');
      return fs.existsSync(pageFile);
    })
    .sort();
}

// 生成多语言 URL 数据
function generateMultilingualUrls(
  urlPath: string,
  priority: number,
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  return locales.map((locale) => {
    // 英语不使用前缀（根域名权重最高），其他语言使用前缀
    // 与 middleware 的 localePrefix: 'as-needed' 保持一致
    const url = locale === 'en'
      ? `${siteUrl}${urlPath}`
      : `${siteUrl}/${locale}${urlPath}`;

    return {
      url,
      lastModified: now,
      changeFrequency,
      priority,
    };
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  // 基础路由（多语言）
  // 注意：已删除 character-test 和 which-pony-are-you，它们会301重定向到 personality-test
  const baseRoutes: MetadataRoute.Sitemap = [
    ...generateMultilingualUrls('/', 1, 'weekly'),
    ...generateMultilingualUrls('/personality-test', 0.9, 'weekly'),
    ...generateMultilingualUrls('/characters', 0.9, 'weekly'),
    ...generateMultilingualUrls('/guides', 0.8, 'weekly'),
    ...generateMultilingualUrls('/privacy', 0.5, 'yearly'),
    ...generateMultilingualUrls('/terms', 0.5, 'yearly'),
  ];

  // guide 页面（不在 [locale] 下，单独处理）
  const siteUrl = getSiteUrl();
  const now = new Date();
  const guidePage: MetadataRoute.Sitemap = [{
    url: `${siteUrl}/guide`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }];

  // 角色页面（多语言）
  const characterSlugs = getAllCharacterSlugs();
  const characterRoutes: MetadataRoute.Sitemap = characterSlugs.flatMap((slug) =>
    generateMultilingualUrls(`/characters/${slug}`, 0.9, 'monthly')
  );

  // 指南页面（多语言）
  const guideSlugs = getGuideSlugs();
  const guideRoutes: MetadataRoute.Sitemap = guideSlugs.flatMap((slug) =>
    generateMultilingualUrls(`/guides/${slug}`, 0.7, 'monthly')
  );

  return [...baseRoutes, ...guidePage, ...characterRoutes, ...guideRoutes];
}
