export function getSiteUrl(): string {
  const explicit =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL;

  if (explicit && explicit.trim().length > 0) {
    return explicit.replace(/\/+$/, "");
  }

  // 优先使用你的正式域名，而不是 Vercel 的临时预览域名
  return "https://mylittleponytest.xyz";
}


