/**
 * 动态路由页面组件 (Catch-All Route)
 *
 * 文件功能：处理所有动态路由请求，支持多语言和多级路径
 * 文件路径：src/app/[locale]/(landing)/[...slug]/page.tsx
 *
 * 路由示例：
 * - /en/about → locale='en', slug='about'
 * - /zh/features/pricing → locale='zh', slug=['features', 'pricing']
 *
 * 页面加载优先级：
 * 1. 静态页面：从 content/pages/**\/*.mdx 加载 MDX 文件
 * 2. 动态页面：从 src/config/locale/messages/{locale}/pages/**\/*.json 加载 JSON 配置
 * 3. 404 页面：如果以上都找不到，返回 notFound()
 *
 * 特点：
 * - 支持国际化（i18n）
 * - 自动生成 SEO 元数据
 * - 1小时缓存重新验证
 * - 主题化页面组件支持
 */

import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';

import { getThemePage } from '@/core/theme';
import { envConfigs } from '@/config';
import { getLocalPage } from '@/shared/models/post';

// 页面缓存重新验证时间：3600秒（1小时）
export const revalidate = 3600;

/**
 * 动态生成页面元数据（SEO）
 *
 * 按优先级尝试以下方式获取元数据：
 * 1. 静态页面元数据（从 MDX 文件的 frontmatter）
 * 2. 动态页面元数据（从 JSON 配置文件）
 * 3. 通用元数据（从公共翻译文件）
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  // 元数据变量
  let title = '';
  let description = '';
  let canonicalUrl = '';

  // 1. 尝试从静态页面获取元数据
  // 来源：content/pages/**/*.mdx

  // 静态页面 slug（用斜杠连接多级路径）
  const staticPageSlug =
    typeof slug === 'string' ? slug : (slug as string[]).join('/') || '';

  // 过滤包含点号的无效 slug（防止访问文件扩展名）
  if (staticPageSlug.includes('.')) {
    return;
  }

  // 构建规范 URL（canonical URL）
  canonicalUrl =
    locale !== envConfigs.locale
      ? `${envConfigs.app_url}/${locale}/${staticPageSlug}`
      : `${envConfigs.app_url}/${staticPageSlug}`;

  // 获取静态页面内容
  const staticPage = await getLocalPage({ slug: staticPageSlug, locale });

  // 如果找到静态页面，返回其元数据
  if (staticPage) {
    title = staticPage.title || '';
    description = staticPage.description || '';

    return {
      title,
      description,
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }

  // 2. 静态页面未找到，尝试从动态页面获取元数据
  // 来源：src/config/locale/messages/{locale}/pages/**/*.json

  // 动态页面 slug（用点号连接多级路径，对应 JSON 嵌套结构）
  const dynamicPageSlug =
    typeof slug === 'string' ? slug : (slug as string[]).join('.') || '';

  const messageKey = `pages.${dynamicPageSlug}`;
  const t = await getTranslations({ locale, namespace: messageKey });

  // 如果找到动态页面元数据，返回
  if (t.has('metadata')) {
    title = t.raw('metadata.title');
    description = t.raw('metadata.description');

    return {
      title,
      description,
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }

  // 3. 返回通用元数据（兜底方案）
  const tc = await getTranslations('common.metadata');

  title = tc('title');
  description = tc('description');

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

/**
 * 动态页面主组件
 *
 * 按优先级渲染页面内容：
 * 1. 静态页面（MDX 文件）
 * 2. 动态页面（JSON 配置）
 * 3. 404 页面（都找不到时）
 */
export default async function DynamicPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale); // 设置当前请求的语言环境

  // 1. 尝试获取静态页面
  // 来源：content/pages/**/*.mdx

  // 静态页面 slug（用斜杠连接多级路径）
  const staticPageSlug =
    typeof slug === 'string' ? slug : (slug as string[]).join('/') || '';

  // 过滤包含点号的无效 slug（安全防护）
  if (staticPageSlug.includes('.')) {
    return notFound();
  }

  // 获取静态页面内容
  const staticPage = await getLocalPage({ slug: staticPageSlug, locale });

  // 如果找到静态页面，渲染静态页面组件
  if (staticPage) {
    const Page = await getThemePage('static-page');

    return <Page locale={locale} post={staticPage} />;
  }

  // 2. 静态页面未找到
  // 尝试获取动态页面内容
  // 来源：src/config/locale/messages/{locale}/pages/**/*.json

  // 动态页面 slug（用点号连接多级路径，对应 JSON 嵌套结构）
  const dynamicPageSlug =
    typeof slug === 'string' ? slug : (slug as string[]).join('.') || '';

  const messageKey = `pages.${dynamicPageSlug}`;

  try {
    const t = await getTranslations({ locale, namespace: messageKey });

    // 如果找到动态页面配置，渲染动态页面组件
    if (t.has('page')) {
      const Page = await getThemePage('dynamic-page');
      return <Page locale={locale} page={t.raw('page')} />;
    }
  } catch (error) {
    // 翻译文件未找到时忽略错误，继续返回 404
    return notFound();
  }

  // 3. 页面未找到，返回 404
  return notFound();
}
