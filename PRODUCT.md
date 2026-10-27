# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) + TypeScript + pnpm. Static export (`output: "export"`) for Cloudflare Pages. Local/Mac deploy later via Wrangler. No GitHub Actions deploy workflows.

（栈由任务简报明确指定，非推断。）

## Users

在闲鱼、小红书、电商、跑腿等大陆平台看到「月入 / 日入」匿名或半匿名声称、想判断真假的读者。场景：刷到截图或话术后，先要看结论，再决定是否深读证据。

（用户画像由任务简报推断并标注。）

## Product Purpose

核查大陆平台上的匿名收入声称，并把**裁定（verdict）放在证据叙事之前**。成功标准：读者在首屏就能读到结论，而不是先读完故事。

## Positioning

大陆平台（闲鱼 / 小红书 / 电商 / 跑腿等）匿名收入声称核查，verdict-first。与英文站 [money.taoliapp.com](https://money.taoliapp.com) **双品牌、意图分离**：英文站核 indie hacker / 支付证据；本站核大陆平台匿名声称。不与 wealth-ideas-hub 混合意图。

## Operating Context

- 中文站独立仓库 `income-claim-cn`；域名 TBD；预览走 `*.pages.dev`
- 英文对照品牌：money.taoliapp.com（只作双品牌说明，不混站、不混内容池）
- 发布：静态站点 + Cloudflare Pages / Wrangler；不走 GitHub Actions Deploy

## Capabilities and Constraints

**做**

- 大陆平台收入声称核查
- Verdict-first：结论 / 裁定优先于展示
- 匿名声称来源：闲鱼 / 小红书 / 电商 / 跑腿等

**不做**

- 英混站
- 广告
- 代运营

Day1 仅为骨架：首页示例数据必须标明「示例」，不得把占位核查写成已完成的真实裁定。

## Brand Commitments

- 语言：zh-CN 单语体验；禁止中英混站 UX（无语言切换、无英文正文栏）
- 无广告、无联盟/affiliate
- 裁定优先于叙事
- 双品牌提及仅作边界说明，不把英文站做成入口或内容源

## Evidence on Hand

无真实核查档案。首页 1–2 张声称卡片为**占位示例**，必须带「示例」标签。不得编造可被误认为真实核验的商户、金额或证据等级。

## Product Principles

1. 先给裁定，再给理由。
2. 只核大陆平台匿名收入声称；不接英文站内容、不接代运营。
3. 占位与真档必须可一眼区分。
4. 页面可被静态导出；预览可走 pages.dev。
5. 可读、可在手机上完成阅读；不靠广告或导流变现。

## Accessibility & Inclusion

简体中文阅读优先。对比度与触控目标按常规 web 可达性处理（任务未指定 WCAG 级别，按 WCAG 2.2 AA 作为工作假设）。
