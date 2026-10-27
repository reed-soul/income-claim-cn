# 收入声称核对

大陆平台（闲鱼 / 小红书 / 电商 / 跑腿等）匿名收入声称核查，verdict-first。

与英文站 [money.taoliapp.com](https://money.taoliapp.com) 双品牌、意图分离：本站只核大陆平台匿名声称，不混站、不混内容池。正式域名 TBD，预览走 Cloudflare Pages（`*.pages.dev`）。

## 本地运行

```bash
pnpm install
pnpm dev
```

静态导出（Cloudflare Pages 产物在 `out/`）：

```bash
pnpm build
```

之后可在本机用 Wrangler 预览或发布（不走 GitHub Actions Deploy）：

```bash
npx wrangler pages dev
npx wrangler pages deploy
```

## 边界

做：大陆平台匿名收入声称核查，裁定优先。  
不做：英混站、广告、代运营。范围见 [Issue #1](https://github.com/reed-soul/income-claim-cn/issues/1)。
