"use client";
import { useEffect, useState } from "react";
import * as client from "../client";
import type { Assignment } from "../client";
export default function WorkingWithObjectsAsync() {
  const [assignment, setAssignment] = useState<Assignment>({
    id: 0,
    title: "",
    description: "",
    due: "",
    completed: false,
    score: 0,
  });
  const updateTitle = async (title: string) => {
    const updatedAssignment = await client.updateTitle(title);
    setAssignment(updatedAssignment);
  };
  useEffect(() => {
    client.fetchAssignment().then(setAssignment);
  }, []);
  return (
    <div id="wd-asynchronous-objects">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <input value={assignment.title}
        className="mb-2 w-full rounded border px-2 py-1"
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
      <br />
      <textarea value={assignment.description}
        className="mb-2 w-full rounded border px-2 py-1"
        onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />
      <br />
      <input type="date" value={assignment.due}
        className="mb-2 rounded border px-2 py-1"
        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })} />
      <br />
      <label>
        <input type="checkbox" checked={assignment.completed}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
        Completed
      </label>
      <br />
      <button className="mr-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        onClick={() => updateTitle(assignment.title)}>
        Update Title
      </button>
      <pre>{JSON.stringify(assignment, null, 2)}</pre>
      <hr />
    </div>
  );
}
