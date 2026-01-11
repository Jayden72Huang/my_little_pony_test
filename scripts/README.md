# 构建脚本说明

## generate-sitemap.js

### 功能
在每次构建时自动生成 `sitemap.xml` 静态文件到 `out` 目录。

### 工作原理
1. 读取 `app/utils/characterData.ts` 获取所有角色 slug
2. 扫描 `app/guides` 目录获取所有 guide slug
3. 生成包含所有 URL 的 sitemap 数据
4. 将数据转换为标准 XML 格式
5. 保存到 `out/sitemap.xml`

### 自动运行
- 通过 `package.json` 的 `postbuild` 钩子，在 `npm run build` 后自动运行
- 在 `npm run deploy` 时也会自动运行（因为 deploy 会先运行 build）

### 手动运行
```bash
node scripts/generate-sitemap.js
```

### 输出
- 文件位置：`out/sitemap.xml`
- 格式：标准 XML sitemap 格式
- 编码：UTF-8
- 包含：所有页面 URL、最后修改时间、更新频率、优先级

### 验证
脚本会自动验证生成的 XML 格式是否正确。
