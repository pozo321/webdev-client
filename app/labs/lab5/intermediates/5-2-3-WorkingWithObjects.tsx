"use client";
import { useState } from "react";
import { httpServer } from "@/app/lib/httpServer";
export default function WorkingWithObjects() {
  const HTTP_SERVER = httpServer();
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [module, setModule] = useState({
    id: "CS4550", name: "Web Development",
    description: "Full stack with Next.js and Express", course: "CS4550",
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="text-blue-700 underline"
        href={`${HTTP_SERVER}/lab5/assignment/title`}>
        Get Title
      </a>
      <hr />
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
        className="mr-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input id="wd-assignment-title" value={assignment.title}
        className="mb-2 rounded border px-2 py-1"
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
      <br />
      <a id="wd-update-assignment-score"
        className="mr-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
        Update Score
      </a>
      <input id="wd-assignment-score" type="number" value={assignment.score}
        className="mb-2 rounded border px-2 py-1"
        onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) || 0 })} />
      <br />
      <a id="wd-update-assignment-completed"
        className="mr-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
        Update Completed
      </a>
      <input id="wd-assignment-completed" type="checkbox" checked={assignment.completed}
        onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
      <hr />
      <h4>Module (On Your Own)</h4>
      <a id="wd-retrieve-module"
        className="mr-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={MODULE_API_URL}>
        Get Module
      </a>
      <a id="wd-retrieve-module-name"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a>
      <br />
      <br />
      <a id="wd-update-module-name"
        className="mr-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Module Name
      </a>
      <input id="wd-module-name" value={module.name}
        className="mb-2 rounded border px-2 py-1"
        onChange={(e) => setModule({ ...module, name: e.target.value })} />
      <br />
      <a id="wd-update-module-description"
        className="mr-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${MODULE_API_URL}/description/${module.description}`}>
        Update Module Description
      </a>
      <input id="wd-module-description" value={module.description}
        className="mb-2 rounded border px-2 py-1"
        onChange={(e) => setModule({ ...module, description: e.target.value })} />
      <hr />
    </div>
  );
}
