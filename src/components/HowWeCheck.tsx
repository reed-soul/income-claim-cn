const steps = [
  {
    mark: "一",
    text: "先看声称能否被核对：平台、时段、金额口径有没有说清。说不清，就不能入账。",
  },
  {
    mark: "二",
    text: "只对可复核痕迹——订单、流水、公开主页——不对话术和截图里的数字本身。",
  },
  {
    mark: "三",
    text: "给出裁定：已核实、部分核实、证据不足、疑似话术。结论写在证据前面。",
  },
  {
    mark: "四",
    text: "不接广告，不代运营，不与英文站混排。本站只核大陆平台匿名收入声称。",
  },
] as const;

export function HowWeCheck() {
  return (
    <section id="how" className="method" aria-labelledby="how-heading">
      <h2 id="how-heading">如何核查</h2>
      <ol>
        {steps.map((step) => (
          <li key={step.mark}>
            <span className="step-mark" aria-hidden="true">
              {step.mark}
            </span>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
