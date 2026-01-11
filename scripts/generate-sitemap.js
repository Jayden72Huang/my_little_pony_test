#!/usr/bin/env node

/**
 * 生成 sitemap.xml 静态文件
 * 在每次构建时运行，确保 sitemap.xml 被正确生成到 out 目录
 */

const fs = require('fs');
const path = require('path');

// 获取项目根目录
const projectRoot = process.cwd();
const outDir = path.join(projectRoot, 'out');
const sitemapDir = path.join(projectRoot, 'sitemap'); // 根目录下的 sitemap 文件夹
const appDir = path.join(projectRoot, 'app');

// 确保 out 目录存在（部署需要）
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 确保 sitemap 目录存在（根目录下的备份）
if (!fs.existsSync(sitemapDir)) {
  fs.mkdirSync(sitemapDir, { recursive: true });
}

// 获取站点 URL
function getSiteUrl() {
  const explicit =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL;

  if (explicit && explicit.trim().length > 0) {
    return explicit.replace(/\/+$/, "");
  }

  // 优先使用正式域名
  return "https://mylittleponytest.xyz";
}

// 获取所有角色 slug
function getAllCharacterSlugs() {
  try {
    // 读取 characterData.ts 文件（更新路径到 [locale] 目录）
    const characterDataPath = path.join(appDir, '[locale]', 'utils', 'characterData.ts');
    const content = fs.readFileSync(characterDataPath, 'utf-8');
    
    // 使用正则表达式提取所有 slug
    const slugMatches = content.match(/slug:\s*['"]([^'"]+)['"]/g);
    if (!slugMatches) return [];
    
    return slugMatches.map(match => {
      const slug = match.match(/['"]([^'"]+)['"]/)[1];
      return slug;
    }).filter(Boolean);
  } catch (error) {
    console.warn('无法读取 characterData.ts，使用默认 slug 列表');
    // 返回默认的角色 slug
    return [
      'twilight-sparkle',
      'rainbow-dash',
      'fluttershy',
      'rarity',
      'pinkie-pie',
      'applejack'
    ];
  }
}

// 获取所有 guide slug
function getGuideSlugs() {
  // 更新路径到 [locale] 目录
  const guidesDir = path.join(appDir, '[locale]', 'guides');
  if (!fs.existsSync(guidesDir)) return [];

  try {
    return fs
      .readdirSync(guidesDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
      .filter((slug) => {
        const pageFile = path.join(guidesDir, slug, 'page.tsx');
        return fs.existsSync(pageFile);
      })
      .sort();
  } catch (error) {
    console.warn('无法读取 guides 目录:', error.message);
    return [];
  }
}

// 支持的语言列表（与 i18n.ts 保持一致）
const locales = ['en', 'tr', 'pl', 'es-MX', 'pt-BR'];

// 生成多语言 URL
function generateMultilingualUrls(path, priority, changeFrequency) {
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
    };
  });
}

// 生成 sitemap 数据
function generateSitemapData() {
  const siteUrl = getSiteUrl();
  // 使用标准ISO 8601格式，移除毫秒（Google推荐格式）
  const now = new Date();
  const isoDate = new Date(now.toISOString().split('.')[0] + 'Z');

  // 基础路由（多语言）
  const baseRoutes = [
    ...generateMultilingualUrls('/', 1, 'weekly'),
    ...generateMultilingualUrls('/personality-test', 0.9, 'weekly'),
    ...generateMultilingualUrls('/character-test', 0.9, 'weekly'),
    ...generateMultilingualUrls('/which-pony-are-you', 0.9, 'weekly'),
    ...generateMultilingualUrls('/characters', 0.9, 'weekly'),
    ...generateMultilingualUrls('/guides', 0.8, 'weekly'),
    ...generateMultilingualUrls('/privacy', 0.5, 'yearly'),
    ...generateMultilingualUrls('/terms', 0.5, 'yearly'),
  ];

  // guide 页面（不在 [locale] 下，单独处理）
  const guidePage = {
    url: `${siteUrl}/guide`,
    lastModified: isoDate,
    changeFrequency: "monthly",
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

  return [...baseRoutes, guidePage, ...characterRoutes, ...guideRoutes];
}

// 将日期格式化为 ISO 8601 字符串
function formatDate(date) {
  return date.toISOString();
}

// 转义 XML 特殊字符
function escapeXml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// 生成 XML 格式的 sitemap（格式化版本，提高可读性）
function generateXml(sitemapData) {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  const urlEntries = sitemapData.map((entry) => {
    const url = escapeXml(entry.url);
    const lastmod = formatDate(entry.lastModified);
    const changefreq = entry.changeFrequency || 'monthly';
    const priority = entry.priority || 0.5;
    
    // 使用缩进提高可读性（Google 推荐格式）
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

// 复制 ads.txt 文件
function copyAdsTxt() {
  try {
    const publicDir = path.join(projectRoot, 'public');
    const adsTxtSource = path.join(publicDir, 'ads.txt');
    const adsTxtDest = path.join(outDir, 'ads.txt');
    
    if (fs.existsSync(adsTxtSource)) {
      fs.copyFileSync(adsTxtSource, adsTxtDest);
      console.log(`✅ ads.txt 已复制到: ${adsTxtDest}`);
      return true;
    } else {
      console.warn('⚠️  public/ads.txt 文件不存在，跳过复制');
      return false;
    }
  } catch (error) {
    console.error('❌ 复制 ads.txt 时出错:', error.message);
    return false;
  }
}

// 主函数
function main() {
  try {
    console.log('🔍 开始生成 sitemap.xml...');
    
    // 生成 sitemap 数据
    const sitemapData = generateSitemapData();
    console.log(`✅ 生成了 ${sitemapData.length} 个 URL`);
    
    // 生成 XML
    const xmlContent = generateXml(sitemapData);
    
    // 写入到根目录的 sitemap 文件夹（主要位置）
    const sitemapPath = path.join(sitemapDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, xmlContent, 'utf-8');
    
    console.log(`✅ sitemap.xml 已生成到: ${sitemapPath}`);
    console.log(`📊 文件大小: ${(fs.statSync(sitemapPath).size / 1024).toFixed(2)} KB`);
    
    // 同时复制到 out 目录（部署需要，worker.js 从 ASSETS 读取）
    const outSitemapPath = path.join(outDir, 'sitemap.xml');
    fs.copyFileSync(sitemapPath, outSitemapPath);
    console.log(`✅ sitemap.xml 已复制到: ${outSitemapPath}`);
    
    // 验证文件
    if (fs.existsSync(sitemapPath) && fs.existsSync(outSitemapPath)) {
      const content = fs.readFileSync(sitemapPath, 'utf-8');
      if (content.includes('<urlset') && content.includes('</urlset>')) {
        console.log('✅ sitemap.xml 格式验证通过');
      } else {
        console.error('❌ sitemap.xml 格式验证失败');
        return 1;
      }
    } else {
      console.error('❌ sitemap.xml 文件未创建');
      return 1;
    }
    
    // 复制 ads.txt 文件
    copyAdsTxt();
    
    return 0;
  } catch (error) {
    console.error('❌ 生成 sitemap.xml 时出错:', error.message);
    console.error(error.stack);
    return 1;
  }
}

// 运行脚本
const exitCode = main();
process.exit(exitCode);
