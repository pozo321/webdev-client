import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <p>
        <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
      </p>

      <h3>Styling with the STYLE attribute</h3>
      <p style={{ backgroundColor: "blue", color: "white" }}>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        Phone Kyaw here. I set this green background and yellow text with
        backgroundColor and color right on the tag, just to try it once.
      </p>
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        This sample paragraph uses a style attribute for a purple background
        and white text.
      </p>

      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different look
          and feel
        </p>
        <p id="wd-id-selector-3">
          My own id, wd-id-selector-3, gives this paragraph a teal background
          with ivory text, and nothing else on the page changes.
        </p>
        <p id="wd-ai-id-selector">
          Sample paragraph with the id wd-ai-id-selector and its own lavender
          and indigo colors.
        </p>
      </div>

      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an element&apos;s
          CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        <p className="wd-kyaw-class">
          My class, wd-kyaw-class, is peach and maroon. I use it for my CS 4550
          notes.
        </p>
        <h4 className="wd-kyaw-class">
          This h4 shares wd-kyaw-class with the paragraph above
        </h4>
        <p className="wd-ai-class-selector">
          Sample paragraph styled by the wd-ai-class-selector class
        </p>
        <h4 className="wd-ai-class-selector">
          Sample heading that shares the wd-ai-class-selector look
        </h4>
      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .wd-selector-1 .wd-selector-3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              <span className="wd-ai-selector-5">
                Sample span matched by .wd-selector-1 .wd-ai-selector-5
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
            </p>
            <div className="wd-selector-kyaw">
              I added this div as a direct child of .wd-selector-2, so only
              .wd-selector-2 &gt; .wd-selector-kyaw colors it.
            </div>
          </div>
        </div>
      </div>

      <div id="wd-css-cascade">
        <h3>Selection rule mechanism</h3>
        <blockquote id="wd-specificity-id" className="wd-specificity-class">
          Phone Kyaw&apos;s specificity test: a tag rule, a class rule, and an
          id rule all set this text color. The id rule comes first in index.css
          and still wins, so the text is teal.
        </blockquote>
        <p id="wd-ai-cascade" className="wd-ai-cascade">
          Sample paragraph: the p tag rule says green, the class rule says
          yellow, and the id rule says red. Red wins.
        </p>
      </div>

      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
    </div>
  );
}
