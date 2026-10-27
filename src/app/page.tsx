import Link from "next/link";
import { ClaimSheet } from "@/components/ClaimSheet";
import { HowWeCheck } from "@/components/HowWeCheck";
import { exampleClaims } from "@/data/example-claims";

const featured = exampleClaims[0];
const secondary = exampleClaims[1];

if (!featured || !secondary) {
  throw new Error("首页需要两张示例核对单");
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#how">
        跳到如何核查
      </a>
      <div className="page">
        <header className="masthead">
          <p className="masthead__mark">收入声称核对</p>
          <nav className="masthead__nav" aria-label="页面">
            <Link href="/" aria-current="page">
              首页
            </Link>
            <a href="#how">如何核查</a>
          </nav>
        </header>

        <main>
          <ClaimSheet claim={featured} featured />
          <ClaimSheet claim={secondary} />
          <HowWeCheck />
        </main>

        <footer className="colophon">
          <p>
            本站核查大陆平台匿名收入声称。英文站为独立品牌，不在此混排。无广告，不代运营。
          </p>
          <p>正式域名待定。预览走 Cloudflare Pages。</p>
        </footer>
      </div>
    </>
  );
}
