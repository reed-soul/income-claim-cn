# Design

<!-- impeccable:design-schema 1 -->

收入声称核对的首页按「银行流水核对单」来：冷色桌面、白蓝纸、1px 会计细线、宋体裁定、朱红「示例」印。裁定用线型编码（实线 / 虚线 / 断开），声称与核验左右分列。

## Token

| Token | Value | Use |
| --- | --- | --- |
| `--desk` | `#c5d0dc` | 页底，办公桌冷光 |
| `--sheet` | `#f3f6f9` | 核对单纸面 |
| `--sheet-tint` | `#eef3f8` | 纸面下沿微偏蓝 |
| `--ink` | `#1a2330` | 正文，非纯黑 |
| `--ink-muted` | `#3a4a5c` | 次级文字，同色相降低 |
| `--rule` | `#b9c6d4` | 1px 细线 |
| `--navy` | `#1e3a5f` | 机构色、链接、焦点 |
| `--seal` | `#b42318` | 示例印泥 |
| `--font-serif` | Songti SC / STSong / Noto Serif SC | 裁定与机构名 |
| `--font-sans` | PingFang SC / 微软雅黑 / Noto Sans SC | 正文（大陆对账单，不依赖 Google Fonts） |
| `--measure` | `70ch` | 说明文字行宽 |

## Frame

页心约 58rem。核对单无圆角、有细线边与下投影。顶栏机构名 + 核对编号；「示例」圆章压在右上，仅首页首张有盖印动画（尊重 reduced-motion）。

## Type

裁定词 `clamp(2.6rem, 9vw, 6rem)` 宋体，是首页 h1。栏目标签小字距加宽。数字用 `tabular-nums`。

## Motion

仅一处：示例印按下（缩放 + 轻微模糊）。其余无入场动画。
