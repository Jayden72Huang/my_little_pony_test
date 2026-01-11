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
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}


