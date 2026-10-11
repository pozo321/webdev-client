export default function TailwindBackgroundColors() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Background Colors</h2>
      <div className="bg-red-500 text-white p-4 mb-4">This div has a red background.</div>
      <div className="bg-green-500 text-white p-4 mb-4">This div has a green background.</div>
      <div className="bg-blue-500 text-white p-4 mb-4">This div has a blue background.</div>
      <div className="bg-yellow-500 text-black p-4 mb-4">This div has a yellow background.</div>
      <div className="bg-emerald-100 text-emerald-900 p-4 mb-4">
        Phone Kyaw&apos;s band: emerald-100 with emerald-900 text.
      </div>
      <div id="wd-ai-bg" className="bg-indigo-700 text-white p-4 mb-4">
        Sample band: indigo-700 with white text.
      </div>
    </div>
  );
}
