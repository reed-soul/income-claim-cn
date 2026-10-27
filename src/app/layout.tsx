import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "收入声称核对",
  description:
    "大陆平台（闲鱼/小红书/电商/跑腿等）匿名收入声称核查，verdict-first。",
  applicationName: "收入声称核对",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    locale: "zh_CN",
    siteName: "收入声称核对",
    title: "收入声称核对",
    description:
      "大陆平台（闲鱼/小红书/电商/跑腿等）匿名收入声称核查，verdict-first。",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
