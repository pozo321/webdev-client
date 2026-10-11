export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div className="wd-dimension-banner wd-bg-color-green wd-fg-color-white">
          Phone Kyaw
        </div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This sample box is only 120px wide and 60px tall, so this long
          sentence keeps going past the bottom edge of its yellow background.
        </div>
      </div>
    </div>
  );
}
