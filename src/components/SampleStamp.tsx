type SampleStampProps = {
  className?: string;
};

export function SampleStamp({ className }: SampleStampProps) {
  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 120 120" role="img">
        <title>示例</title>
        <circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
        />
        <circle
          cx="60"
          cy="60"
          r="47"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <text
          x="60"
          y="72"
          textAnchor="middle"
          fill="currentColor"
          fontFamily='Songti SC, STSong, "Noto Serif SC", serif'
          fontSize="34"
          fontWeight="700"
          letterSpacing="0.12em"
        >
          示例
        </text>
      </svg>
    </div>
  );
}
