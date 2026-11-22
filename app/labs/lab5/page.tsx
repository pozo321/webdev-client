import Environment from "./intermediates/5-2-1-Environment";
import PathParameters from "./intermediates/5-2-2-1-PathParameters";
import QueryParameters from "./intermediates/5-2-2-2-QueryParameters";
import WorkingWithObjects from "./intermediates/5-2-3-WorkingWithObjects";
import WorkingWithArrays from "./intermediates/5-2-4-WorkingWithArrays";
import HttpClient from "./intermediates/5-2-5-HttpClient";
import WorkingWithObjectsAsync from "./intermediates/5-2-5-WorkingWithObjectsAsync";
import WorkingWithArraysAsync from "./intermediates/5-2-6-WorkingWithArraysAsync";
import HelloRoute from "./intermediates/5-3-1-HelloRoute";
import CalculatorNextWebApiClient from "./intermediates/5-3-1-Calculator";

export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <Environment />
      <PathParameters />
      <QueryParameters />
      <WorkingWithObjects />
      <WorkingWithArrays />
      <HttpClient />
      <WorkingWithObjectsAsync />
      <WorkingWithArraysAsync />
      <HelloRoute />
      <CalculatorNextWebApiClient />
      <div id="wd-lab5-on-your-own">
        <h3>On your own</h3>
        <ul className="list-disc pl-6">
          <li>Welcome: click the Welcome link and confirm the Express greeting.</li>
          <li>Path Parameters: multiply and divide links, default a = 6 and b = 3.</li>
          <li>Query Parameters: multiply and divide links on /lab5/calculator.</li>
          <li>Module object: score 87, completed true, module name and description routes.</li>
          <li>Todos: completed and description routes with links and inputs.</li>
          <li>Assignment title: set it to CS4550 A5 Express server, click Update Title, refresh.</li>
          <li>Delete todo id 3 with the GET link, then click the X on id 3 and read the 404 message.</li>
          <li>Calculator route: divide by zero and an unknown operation show an error string.</li>
        </ul>
      </div>
      <div id="wd-lab5-with-ai">
        <h3>With AI</h3>
        <ul className="list-disc pl-6">
          <li>Do not hard-code localhost:4000 in my Lab 5 Welcome link. Use process.env.NEXT_PUBLIC_HTTP_SERVER (or httpServer()) and keep id wd-welcome-link.</li>
          <li>Do not implement my module routes. List the /lab5/module URLs I still need (object, name, update name, update description) as a short checklist.</li>
          <li>In app/labs/lab5/intermediates/5-2-6-WorkingWithArraysAsync.tsx, keep my deleteTodo try/catch. If the catch runs, keep showing errorMessage. Do not remove the FaPlusCircle POST button.</li>
          <li>In app/api/lab5/calculator/route.ts, keep add and subtract. Add multiply and divide cases. Return 400 for unknown operations. Do not change the hello route.</li>
        </ul>
        <h4>Module URLs checklist</h4>
        <ul className="list-disc pl-6">
          <li>/lab5/module</li>
          <li>/lab5/module/name</li>
          <li>/lab5/module/name/:name</li>
          <li>/lab5/module/description/:description</li>
        </ul>
      </div>
    </div>
  );
}
