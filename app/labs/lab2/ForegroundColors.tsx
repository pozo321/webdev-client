export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">this text is green</span>
      </p>
      <p className="wd-fg-color-green">
        My Lab 2 to-do list is green,{" "}
        <span className="wd-fg-color-red">the parts due tonight are red</span>,
        and <span className="wd-fg-color-blue">the parts I finished are blue</span>.
      </p>
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        This sample paragraph is blue but{" "}
        <span className="wd-fg-color-black">this sample span is black</span>
      </p>
    </div>
  );
}
