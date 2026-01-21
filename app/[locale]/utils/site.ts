export function getSiteUrl(): string {
  const explicit =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL;

  if (explicit && explicit.trim().length > 0) {
    return explicit.replace(/\/+$/, "");
  }

  // 使用 www 作为主域名（canonical domain）
  // 非 www 域名会通过 Vercel 重定向到 www
  return "https://www.mylittleponytest.xyz";
}


