import { NextResponse } from 'next/server';
import { getSiteUrl } from '../[locale]/utils/site';
import { getAllCharacterSlugs } from '../[locale]/utils/characterData';
import { locales } from '../../i18n';
import fs from 'node:fs';
import path from 'node:path';

export const runtime = 'nodejs';
export const dynamic = 'force-static';

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
  path: string,
  priority: number,
  changeFrequency: 'weekly' | 'monthly' | 'yearly'
) {
  const siteUrl = getSiteUrl();
  // 使用实际的当前时间，而不是硬编码日期
  const now = new Date();
  const isoDate = now.toISOString();

  return locales.map((locale) => {
    // 所有语言都使用前缀，与 middleware 的 localePrefix: 'always' 保持一致
    const url = `${siteUrl}/${locale}${path}`;

    return {
      url,
      lastModified: isoDate,
      changeFrequency,
      priority,
    };
  });
}

// XML 转义函数
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// 生成格式化的 XML sitemap
function generateFormattedXml(sitemapData: Array<{
  url: string;
  lastModified: string;
  changeFrequency: string;
  priority: number;
}>): string {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  const urlEntries = sitemapData.map((entry) => {
    const url = escapeXml(entry.url);
    const lastmod = entry.lastModified;
    const changefreq = entry.changeFrequency;
    const priority = entry.priority;
    
    // 使用缩进提高可读性（与静态生成脚本保持一致）
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');
  
  const urlsetClose = '\n</urlset>';
  
  return xmlHeader + urlsetOpen + urlEntries + urlsetClose;
}

export async function GET() {
  // 基础路由（多语言）
  // 注意：已删除 character-test 和 which-pony-are-you，它们会301重定向到 personality-test
  const baseRoutes = [
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
  const guidePage = {
    url: `${siteUrl}/guide`,
    lastModified: now.toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  };

  // 角色页面（多语言）
  const characterSlugs = getAllCharacterSlugs();
  const characterRoutes = characterSlugs.flatMap((slug) =>
    generateMultilingualUrls(`/characters/${slug}`, 0.9, 'monthly')
  );

  // 指南页面（多语言）
  const guideSlugs = getGuideSlugs();
  const guideRoutes = guideSlugs.flatMap((slug) =>
    generateMultilingualUrls(`/guides/${slug}`, 0.7, 'monthly')
  );

  const allRoutes = [...baseRoutes, guidePage, ...characterRoutes, ...guideRoutes];
  
  // 生成格式化的 XML
  const xmlContent = generateFormattedXml(allRoutes);

  return new NextResponse(xmlContent, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'X-Robots-Tag': 'index, follow',
    },
  });
}
