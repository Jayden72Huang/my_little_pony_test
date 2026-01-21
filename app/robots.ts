import type { MetadataRoute } from "next";
import { getSiteUrl } from "./[locale]/utils/site";

export const runtime = "nodejs";
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // 添加爬虫速率限制，避免过度爬取
        crawlDelay: 1,
      },
      // 屏蔽一些不必要的爬虫
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",
        disallow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}


