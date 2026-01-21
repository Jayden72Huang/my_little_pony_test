# Sitemap 格式修复说明

## 问题描述

在从 Cloudflare 迁移到 Vercel 部署后，sitemap 的格式发生了变化：

- **之前（Cloudflare）**：使用 `scripts/generate-sitemap.js` 生成的静态 XML 文件，格式规整（有缩进，可读性好）
- **现在（Vercel）**：使用 Next.js 的 `app/sitemap.ts`，生成的 XML 未格式化（无缩进）

## 解决方案

创建了自定义的 sitemap 路由处理器 `app/sitemap.xml/route.ts`，它会：

1. ✅ 生成格式化的 XML（与静态生成脚本保持一致）
2. ✅ 包含所有必要的 XML 标签和属性
3. ✅ 设置正确的 Content-Type 头
4. ✅ 在 Vercel 和 Cloudflare 上都能正常工作

## 对 Google Search Console 的影响

**重要：XML 格式（无论是否有缩进）对搜索引擎没有影响！**

- ✅ 只要 XML 是有效的，GSC 就能正常解析
- ✅ 格式化的 XML 只是更容易人工查看和调试
- ✅ 搜索引擎只关心 XML 的结构和内容，不关心格式

## 技术细节

### 新的实现方式

使用 Next.js 的 Route Handler (`app/sitemap.xml/route.ts`) 而不是 Metadata Route (`app/sitemap.ts`)，因为：

1. **完全控制输出格式**：可以手动生成格式化的 XML
2. **与静态脚本一致**：使用相同的格式化逻辑
3. **更好的兼容性**：在 Vercel 和 Cloudflare 上都能正常工作

### 格式化特点

- 使用 2 空格缩进
- 每个 `<url>` 标签独立一行
- 子标签（`<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`）有适当的缩进
- 符合 Google 推荐的 sitemap 格式

## 验证方法

### 1. 本地测试

```bash
npm run build
npm run start
# 访问 http://localhost:3000/sitemap.xml
```

### 2. 检查格式

访问 `https://your-domain.com/sitemap.xml`，应该看到：
- ✅ 格式化的 XML（有缩进）
- ✅ 正确的 Content-Type: `application/xml; charset=utf-8`
- ✅ 所有 URL 都正确包含

### 3. Google Search Console 验证

1. 进入 GSC → Sitemaps
2. 提交 `https://your-domain.com/sitemap.xml`
3. 检查是否有错误（应该没有）

## 文件变更

- ✅ 新增：`app/sitemap.xml/route.ts` - 自定义 sitemap 路由处理器
- ❌ 删除：`app/sitemap.ts` - 旧的 Next.js Metadata Route（已被替代）

## 注意事项

1. **构建时生成**：sitemap 在运行时动态生成，每次请求都会重新生成
2. **缓存控制**：设置了 1 小时的缓存（`max-age=3600`）
3. **性能**：对于大量 URL，可以考虑使用静态生成或分页 sitemap

## 后续优化建议

如果 URL 数量超过 50,000，可以考虑：

1. **分页 sitemap**：使用 `sitemap-index.xml` 和多个 `sitemap-1.xml`, `sitemap-2.xml` 等
2. **静态生成**：在构建时生成静态 XML 文件
3. **增量更新**：只更新变化的 URL
