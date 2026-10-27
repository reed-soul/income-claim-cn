export const platforms = ["闲鱼", "小红书", "电商", "跑腿"] as const;

export type Platform = (typeof platforms)[number];

export const verdictKinds = [
  "verified",
  "partial",
  "insufficient",
  "likely-hype",
] as const;

export type VerdictKind = (typeof verdictKinds)[number];

export type StrokeState = "solid" | "dashed" | "gapped";

export type ExampleClaim = {
  id: string;
  sample: true;
  platform: Platform;
  claim: string;
  claimedFigure: string;
  period: string;
  verdict: VerdictKind;
  claimLines: readonly string[];
  checkLines: readonly string[];
  summary: string;
};

export const verdictCopy: Record<
  VerdictKind,
  { label: string; stroke: StrokeState }
> = {
  verified: { label: "已核实", stroke: "solid" },
  partial: { label: "部分核实", stroke: "dashed" },
  insufficient: { label: "证据不足", stroke: "gapped" },
  "likely-hype": { label: "疑似话术", stroke: "gapped" },
};

export const exampleClaims: readonly ExampleClaim[] = [
  {
    id: "EX-01",
    sample: true,
    platform: "闲鱼",
    claim: "闲置转卖月入三万",
    claimedFigure: "月入 3 万",
    period: "未标明周期",
    verdict: "insufficient",
    claimLines: [
      "匿名帖声称「闲置转卖月入三万」",
      "未给出可核对的店铺或账号",
      "金额口径为「月入」，不是订单合计",
    ],
    checkLines: [
      "未见对应订单或资金流水",
      "无法核对统计周期",
      "目前只有话术截图，不能入账",
    ],
    summary:
      "能看到声称本身，看不到可对账的公共痕迹。在示例条件下，裁定为证据不足。",
  },
  {
    id: "EX-02",
    sample: true,
    platform: "小红书",
    claim: "同城跑腿日入八百",
    claimedFigure: "日入 800",
    period: "自称「当日」",
    verdict: "partial",
    claimLines: [
      "笔记配「当日跑单」界面截图",
      "金额口径为「日入」",
      "账号与单号均已打码",
    ],
    checkLines: [
      "界面样式可辨，仍无法定位账户",
      "单量、时段无法复核",
      "截图可被编辑，只能算部分痕迹",
    ],
    summary:
      "有界面痕迹，但对不到可复核的跑单记录。在示例条件下，裁定为部分核实。",
  },
] as const;
