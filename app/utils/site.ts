export function getSiteUrl(): string {
  const explicit =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL;

  if (explicit && explicit.trim().length > 0) {
    return explicit.replace(/\/+$/, "");
  }

  // 使用 mylittleponytest.xyz 作为主域名（canonical domain）
  // www 域名会通过 Vercel 重定向到非 www
  return "https://mylittleponytest.xyz";
}


