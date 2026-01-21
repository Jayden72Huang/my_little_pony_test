# WWW 子域名配置指南

## 问题描述

`https://www.mylittleponytest.xyz/` 无法访问，因为 www 子域名的 DNS 配置缺失。

## 解决方案

### 方案 1：在 Vercel Dashboard 中添加域名（推荐）

如果您使用 Vercel 部署：

1. **登录 Vercel Dashboard**
   - 访问：https://vercel.com/dashboard
   - 登录您的账户

2. **进入项目设置**
   - 找到项目 "my-little-pony-test"
   - 点击进入项目

3. **添加域名**
   - 点击 "Settings" 标签
   - 选择 "Domains"
   - 点击 "Add" 按钮
   - 输入域名：`www.mylittleponytest.xyz`
   - 点击 "Add"

4. **配置 DNS 记录**
   - Vercel 会显示需要添加的 DNS 记录
   - 通常是 CNAME 记录：`www` → `cname.vercel-dns.com`
   - 在您的 DNS 提供商（Cloudflare）中添加此记录

### 方案 2：在 Cloudflare 中配置 DNS

如果您使用 Cloudflare 管理 DNS：

1. **登录 Cloudflare Dashboard**
   - 访问：https://dash.cloudflare.com
   - 选择域名 `mylittleponytest.xyz`

2. **添加 CNAME 记录**
   - 进入 "DNS" → "Records"
   - 点击 "Add record"
   - 类型：`CNAME`
   - 名称：`www`
   - 目标：`cname.vercel-dns.com`（或 Vercel 提供的 CNAME 值）
   - 代理状态：关闭（灰色云朵，不通过 Cloudflare 代理）
   - 点击 "Save"

3. **等待 DNS 传播**
   - DNS 更改通常需要几分钟到几小时生效
   - 可以使用 `dig www.mylittleponytest.xyz` 检查 DNS 解析

### 方案 3：使用 Cloudflare Workers（如果使用 Cloudflare 部署）

如果您使用 Cloudflare Workers 部署：

1. **在 Cloudflare Dashboard 中添加自定义域名**
   - 进入 Workers & Pages → my-little-pony-test
   - Settings → Domains & Routes
   - 点击 "Add Custom Domain"
   - 输入：`www.mylittleponytest.xyz`
   - 点击 "Add"

2. **配置文件已更新**
   - `wrangler.toml` 已包含 www 路由配置
   - 运行 `npm run deploy` 部署更新

## 验证配置

### 1. 检查 DNS 记录

```bash
# 检查 www 子域名的 DNS 解析
dig www.mylittleponytest.xyz +short

# 应该返回 Vercel 的 CNAME 记录或 Cloudflare 的 IP
```

### 2. 测试访问

等待 DNS 传播后（通常 5-30 分钟），访问：
- https://www.mylittleponytest.xyz
- https://www.mylittleponytest.xyz/sitemap.xml

### 3. 检查 SSL 证书

- Vercel 会自动为 www 子域名生成 SSL 证书
- Cloudflare 也会自动生成 SSL 证书
- 通常需要几分钟到几小时

## 重要提示

### DNS 记录类型选择

**如果使用 Vercel：**
- 使用 CNAME 记录：`www` → `cname.vercel-dns.com`
- 不要使用 A 记录（Vercel 使用动态 IP）

**如果使用 Cloudflare Workers：**
- 使用 Cloudflare 的自定义域名功能
- 不需要手动添加 DNS 记录（Cloudflare 自动处理）

### 避免 DNS 冲突

- 确保只有一个平台管理 DNS 记录
- 如果同时使用 Vercel 和 Cloudflare，选择其中一个作为主要 DNS 提供商
- 删除冲突的 DNS 记录

## 故障排除

### 问题 1：DNS 记录已添加但仍无法访问

**可能原因：**
- DNS 传播尚未完成（等待 5-30 分钟）
- SSL 证书尚未生成（等待几分钟到几小时）
- DNS 记录配置错误

**解决方法：**
1. 检查 DNS 记录是否正确
2. 等待更长时间
3. 清除浏览器缓存
4. 使用 `dig` 或 `nslookup` 验证 DNS 解析

### 问题 2：SSL 证书错误

**可能原因：**
- SSL 证书尚未生成
- DNS 记录配置错误

**解决方法：**
1. 等待 SSL 证书自动生成（通常几分钟）
2. 检查 DNS 记录是否正确
3. 在 Vercel/Cloudflare Dashboard 中检查 SSL 证书状态

### 问题 3：重定向循环

**可能原因：**
- 同时配置了多个重定向规则
- DNS 记录冲突

**解决方法：**
1. 检查 `vercel.json` 中的重定向规则
2. 确保只有一个重定向规则
3. 检查 DNS 记录是否冲突

## 当前配置状态

✅ **已完成的配置：**
- `vercel.json` 已添加 www 域名到 domains 列表
- `wrangler.toml` 已包含 www 路由配置（如果使用 Cloudflare）

⏳ **需要手动操作：**
- 在 Vercel Dashboard 中添加 `www.mylittleponytest.xyz` 域名
- 或在 Cloudflare 中添加 CNAME 记录
- 等待 DNS 传播和 SSL 证书生成

## 下一步

1. **选择部署平台**：确定使用 Vercel 还是 Cloudflare Workers
2. **添加域名**：按照上述步骤在对应平台添加 www 域名
3. **配置 DNS**：在 DNS 提供商中添加必要的记录
4. **等待生效**：等待 DNS 传播和 SSL 证书生成（通常 5-30 分钟）
5. **验证访问**：访问 https://www.mylittleponytest.xyz 确认可以访问
