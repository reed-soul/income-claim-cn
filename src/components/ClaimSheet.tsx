import {
  type ExampleClaim,
  verdictCopy,
} from "@/data/example-claims";
import { SampleStamp } from "@/components/SampleStamp";

type ClaimSheetProps = {
  claim: ExampleClaim;
  featured?: boolean;
};

export function ClaimSheet({ claim, featured = false }: ClaimSheetProps) {
  const verdict = verdictCopy[claim.verdict];
  const headingId = `verdict-${claim.id.toLowerCase()}`;

  return (
    <article
      className={featured ? "sheet" : "sheet sheet--register"}
      aria-labelledby={headingId}
    >
      <SampleStamp className="stamp" />
      <header className="sheet__head">
        <div>
          <p className="sheet__org">收入声称核对</p>
          <p className="sheet__meta">
            {claim.platform} · {claim.period} · 占位示例，非真实裁定
          </p>
        </div>
        <p className="sheet__id">
          核对编号
          <strong>{claim.id}</strong>
        </p>
      </header>

      <div className="verdict">
        {featured ? (
          <h1 id={headingId} className="verdict__word">
            {verdict.label}
          </h1>
        ) : (
          <h2 id={headingId} className="verdict__word">
            {verdict.label}
          </h2>
        )}
        <div
          className={`verdict__stroke verdict__stroke--${verdict.stroke}`}
          aria-hidden="true"
        >
          <span />
          <span />
        </div>
      </div>

      <p className="claim-quote">
        声称「<strong>{claim.claim}</strong>」，口径 {claim.claimedFigure}。
      </p>

      <div className="ledger">
        <section>
          <p className="ledger__label">声称</p>
          <ul>
            {claim.claimLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
        <div className="ledger__rule" aria-hidden="true" />
        <section>
          <p className="ledger__label">核验</p>
          <ul>
            {claim.checkLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
      </div>

      <p className="summary">{claim.summary}</p>
    </article>
  );
}
