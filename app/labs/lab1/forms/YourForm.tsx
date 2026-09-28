export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <hr />
      <h4>Student Profile</h4>

      <h5>Personal Info</h5>
      <label htmlFor="wd-your-first-name">First Name: </label>
      <input defaultValue="Phone" placeholder="Po" id="wd-your-first-name" />
      <br />
      <label htmlFor="wd-your-last-name">Last Name: </label>
      <input defaultValue="Kyaw" placeholder="Kyaw" id="wd-your-last-name" />
      <br />
      <label htmlFor="wd-your-password">Password: </label>
      <input type="password" defaultValue="12345" id="wd-your-password" />
      <br />

      <h5>About Me</h5>
      <label htmlFor="wd-your-textarea">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-textarea"
        cols={30}
        rows={6}
        defaultValue="Hi my name is Po and the reason I wanted to take this course was to learn more about Web Dev, the tech stack used for it, and to gain some more experience with it."
      />
      <br />

      <h5>Class Standing</h5>
      <input type="radio" name="class-standing" id="wd-freshmen-radio" />
      <label htmlFor="wd-freshmen-radio">Freshman</label>
      <br />
      <input 
        type="radio" 
        name="class-standing" 
        id="wd-sophomore-radio" 
        defaultChecked
      />
      <label htmlFor="wd-sophomore-radio">Sophomore</label>
      <br />
      <input type="radio" name="class-standing" id="wd-junior-radio"/>
      <label htmlFor="wd-junior-radio">Junior</label>
      <br />
      <input type="radio" name="class-standing" id="wd-senior-radio" />
      <label htmlFor="wd-senior-radio">Senior</label>
      <br />
      <input type="radio" name="class-standing" id="wd-graduate-radio" />
      <label htmlFor="wd-graduate-radio">Graduate</label>
      <br />

      <h5>Housing</h5>
      <input type="radio" name="onOrOffLocation" id="wd-onCampus-radio" />
      <label htmlFor="wd-onCampus-radio">On Campus</label>
      <br />
      <input
        type="radio"
        name="onOrOffLocation"
        id="wd-offCampus-radio"
        defaultChecked
      />
      <label htmlFor="wd-offCampus-radio">Off Campus</label>
      <br />

      <h5>Interests</h5>
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-chkbox-react"
        defaultChecked
      />
      <label htmlFor="wd-your-chkbox-react">React / Next.js</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-chkbox-typescript"
        defaultChecked
      />
      <label htmlFor="wd-your-chkbox-typescript">TypeScript</label>
      <br />
      <input type="checkbox" name="your-interests" id="wd-your-chkbox-node" />
      <label htmlFor="wd-your-chkbox-node">Node.js / Express</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-chkbox-ai"
        defaultChecked
      />
      <label htmlFor="wd-your-chkbox-ai">AI / LLM Apps</label>
      <br />
      <input type="checkbox" name="your-interests" id="wd-your-chkbox-coop" />
      <label htmlFor="wd-your-chkbox-coop">Software Engineering Co-op</label>
      <br />

      <h5>Major</h5>
      <label htmlFor="wd-your-select-major">Major: </label>
      <select id="wd-your-select-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="CY">Cybersecurity</option>
        <option value="CE">Computer Engineering</option>
      </select>
      <br />

      <h5>Topics to Learn This Term</h5>
      <label htmlFor="wd-your-select-topics">Topics: </label>
      <br />
      <select
        multiple
        id="wd-your-select-topics"
        defaultValue={["REACT", "EXPRESS"]}
      >
        <option value="HTML">HTML & JSX</option>
        <option value="TAILWIND">CSS & Tailwind</option>
        <option value="REACT">JavaScript & React</option>
        <option value="ZUSTAND">State Management (Zustand)</option>
        <option value="EXPRESS">REST APIs with Express</option>
        <option value="MONGODB">MongoDB</option>
      </select>
      <br />

      <h5>More About Me</h5>
      <label htmlFor="wd-your-email">School Email: </label>
      <input
        type="email"
        defaultValue="kyaw.p@northeastern.edu"
        placeholder="name@northeastern.edu"
        id="wd-your-email"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Graduation Year: </label>
      <input
        type="number"
        defaultValue="2028"
        min={2026}
        max={2031}
        id="wd-your-grad-year"
      />
      <br />
      <label htmlFor="wd-your-start-date">CS4550 Start Date: </label>
      <input type="date" defaultValue="2026-09-09" id="wd-your-start-date" />
      <br />
      <label htmlFor="wd-your-excitement">
        How excited I am about this course (0-10):{" "}
      </label>
      <input
        type="range"
        defaultValue="9"
        min="0"
        max="10"
        id="wd-your-excitement"
      />
      <br />
      <br />

      <button id="wd-your-button-save" type="submit">
        Save
      </button>
      <button id="wd-your-button-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
