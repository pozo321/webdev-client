export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/jannunzi" id="wd-github">
        GitHub
      </a>
      <br />
      <br />
      <h5>My Links</h5>
      Docs I read all the time:{" "}
      <a href="https://nextjs.org/docs" id="wd-your-link">
        Next.js Docs
      </a>
      <br />
      <a
        href="https://github.com/pozo321"
        id="wd-your-github"
        target="_blank"
        rel="noreferrer"
      >
        My GitHub (opens in new tab)
      </a>
      <br />
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
      >
        MDN: table element
      </a>
    </>
  );
}
