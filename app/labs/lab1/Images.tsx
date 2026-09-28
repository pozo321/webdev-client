export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      A sample image from NASA:
      <br />
      <img
        id="wd-ai-image"
        src="https://images-assets.nasa.gov/image/as17-148-22727/as17-148-22727~medium.jpg"
        width="200px"
        alt="Earth seen from Apollo 17"
      />
      <br />
      A picture of some fried chicken
      <br />
      <img
        id="wd-your-image"
        src="https://www.butterbeready.com/wp-content/uploads/2024/11/fried-chicken-5.jpg"
        width="250px"
        alt="Eight pieces of golden fried chicken"
      />
    </div>
  );
}
