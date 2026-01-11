# 域名绑定配置指南

## 将 mylittleponytest.xyz 绑定到 Cloudflare Workers

### 前提条件
1. 域名 `mylittleponytest.xyz` 必须在您的 Cloudflare 账户中
2. 域名必须已经添加到 Cloudflare 作为 Zone

### 配置步骤

#### 方法 1：通过 Cloudflare Dashboard（推荐）

1. **登录 Cloudflare Dashboard**
   - 访问：https://dash.cloudflare.com
   - 登录您的账户

2. **进入 Workers & Pages**
   - 访问：https://dash.cloudflare.com/?to=/:account/workers-and-pages
   - 或从左侧菜单选择 "Workers & Pages"

3. **选择 Worker**
   - 找到并点击 "my-little-pony-test"

4. **添加自定义域名**
   - 点击 "Settings" 标签
   - 选择 "Domains & Routes"
   - 点击 "Add" 按钮
   - 选择 "Custom domain"
   - 输入域名：`mylittleponytest.xyz`
   - 点击 "Add Custom Domain"

5. **处理现有 DNS 记录**
   如果遇到错误提示域名已有 DNS 记录：
   - 进入 DNS 管理页面：https://dash.cloudflare.com/?to=/:zone/dns/records
   - 找到 `mylittleponytest.xyz` 的 A、AAAA 或 CNAME 记录
   - 删除这些记录
   - 重新执行步骤 4

6. **添加 www 子域名（可选）**
   - 重复步骤 4，添加 `www.mylittleponytest.xyz`

#### 方法 2：通过 Wrangler CLI

如果域名没有现有 DNS 记录，可以直接使用配置文件：

```bash
npm run deploy
```

配置文件 `wrangler.toml` 已经包含了自定义域名配置。

### 验证配置

配置完成后，等待几分钟让 DNS 和 SSL 证书生效，然后访问：
- https://mylittleponytest.xyz
- https://www.mylittleponytest.xyz

### 注意事项

1. **DNS 记录冲突**：如果域名已有 A、AAAA 或 CNAME 记录，Cloudflare 无法自动创建自定义域名。需要先删除这些记录。

2. **SSL 证书**：Cloudflare 会自动为自定义域名生成 SSL 证书，通常需要几分钟到几小时。

3. **DNS 传播**：域名更改可能需要一些时间在全球 DNS 服务器中传播。

4. **workers.dev 域名**：配置自定义域名后，`my-little-pony-test.kevin0702tt.workers.dev` 仍然可以访问。

### 故障排除

如果遇到问题：
1. 检查域名是否在 Cloudflare 账户中
2. 检查 DNS 记录是否已删除
3. 查看 Cloudflare Dashboard 中的错误信息
4. 等待 SSL 证书生成（可能需要几分钟）
