export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td align="center">React</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td align="center">Tailwind</td>
            <td align="center">3/3/21</td>
            <td align="right">92</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td align="center">Next.js</td>
            <td align="center">3/10/21</td>
            <td align="right">79</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td align="center">Zustand</td>
            <td align="center">3/17/21</td>
            <td align="right">94</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td align="center">Node.js</td>
            <td align="center">3/24/21</td>
            <td align="right">87</td>
          </tr>
          <tr>
            <td>Q9</td>
            <td align="center">Express</td>
            <td align="center">3/31/21</td>
            <td align="right">91</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td align="center">MongoDB</td>
            <td align="center">4/7/21</td>
            <td align="right">96</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">89.7</td>
          </tr>
        </tfoot>
      </table>
      <p></p>
      <table id="wd-your-table" border={1} width="100%">
        <thead>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td align="center">Fundamentals of Software Engineering</td>
            <td align="center">Co-op Class</td>
            <td align="center">Web Development</td>
            <td align="center">Fundamentals of Software Engineering</td>
            <td></td>
            <td></td>
            <td align="center">8+</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td align="center">TedxNortheasternU Meeting</td>
            <td align="center">Dell Technologies Virtual Event</td>
            <td></td>
            <td></td>
            <td></td>
            <td align="center">3+</td>
          </tr>
          <tr>
            <td></td>
            <td align="center">VexU Software Meeting</td>
            <td></td>
            <td></td>
            <td align="center">Club Kickoff Meeting</td>
            <td></td>
            <td></td>
            <td align="center">3+</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={7}>Hours Outside</td>
            <td align="center">14+</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
