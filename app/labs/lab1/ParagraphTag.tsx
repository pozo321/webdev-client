export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">
        This is a paragraph. We often separate a long set of sentences with
        vertical spaces to make the text easier to read. Browsers ignore
        vertical white spaces and render all the text as one single set of
        sentences. To force the browser to add vertical spacing, wrap the
        paragraphs you want to separate with the paragraph tag
      </p>
      <p id="wd-p-2">
        This is the first paragraph. The paragraph tag is used to format
        vertical gaps between long pieces of text like this one.
      </p>
      <p id="wd-p-3">
        This is the second paragraph. Even though there is a deliberate white
        gap between the paragraph above and this paragraph, by default browsers
        render them as one contiguous piece of text as shown here on the right.
      </p>
      <p id="wd-p-4">
        This is the third paragraph. Wrap each paragraph with the paragraph tag
        to tell browsers to render the gaps.
      </p>
      <p id="wd-ai-p">
        Browsers collapse the line breaks and extra spaces in HTML source into a
        single space, so text on separate lines still renders as one block. A p
        element is a block-level element with a default top and bottom margin,
        which is what creates the visible gap between paragraphs.
      </p>
      <p id="wd-p-your-1">
        This is the fourth paragraph. I am from Jordan. Ethnically, I am Burmese/Chinese.
      </p>
      <p id="wd-p-your-2">
        This is the fifth paragraph. I also lived in Thailand, Sudan, and Myanmar. I hope to learn
        more about web dev in this course.
      </p>
    </div>
  );
}
