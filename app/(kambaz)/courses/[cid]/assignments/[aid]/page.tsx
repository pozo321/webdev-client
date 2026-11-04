"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const assignments = useAssignmentsStore((state) => state.assignments);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore(
    (state) => state.updateAssignment,
  );
  const existing = assignments.find((a) => a._id === aid);
  const [assignment, setAssignment] = useState<Assignment>(
    existing ?? {
      _id: "",
      title: "New Assignment",
      course: String(cid),
      description: "New Assignment Description",
      points: 100,
      due: "",
      available: "",
      until: "",
    },
  );

  const save = () => {
    if (existing) {
      updateAssignment(assignment);
    } else {
      addAssignment(assignment);
    }
    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="max-w-3xl text-sm">
      <label htmlFor="wd-name" className="mb-1 block">
        Assignment Name
      </label>
      <input
        id="wd-name"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <p className="mb-4 text-neutral-600">Assignment id: {aid}</p>
      <label htmlFor="wd-description" className="mb-1 block">
        Description
      </label>
      <textarea
        id="wd-description"
        rows={5}
        value={assignment.description}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2 font-sans"
      />
      <div className="mb-4 flex items-start gap-4">
        <label htmlFor="wd-points" className="w-1/4 shrink-0 pt-2 text-right">
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          value={assignment.points}
          onChange={(e) =>
            setAssignment({ ...assignment, points: Number(e.target.value) })
          }
          className="w-full rounded border border-neutral-300 px-3 py-2"
        />
      </div>
      <div className="mb-4 flex items-start gap-4">
        <label htmlFor="wd-group" className="w-1/4 shrink-0 pt-2 text-right">
          Assignment Group
        </label>
        <select
          id="wd-group"
          defaultValue="ASSIGNMENTS"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>
      <div className="mb-4 flex items-start gap-4">
        <label
          htmlFor="wd-display-grade-as"
          className="w-1/4 shrink-0 pt-2 text-right"
        >
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="PERCENTAGE"
          className="w-full rounded border border-neutral-300 bg-white px-3 py-2"
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter Grade</option>
        </select>
      </div>
      <div className="mb-4 flex items-start gap-4">
        <label
          htmlFor="wd-submission-type"
          className="w-1/4 shrink-0 pt-2 text-right"
        >
          Submission Type
        </label>
        <div className="w-full rounded border border-neutral-300 p-3">
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className="mb-3 w-full rounded border border-neutral-300 bg-white px-3 py-2"
          >
            <option value="ONLINE">Online</option>
            <option value="PAPER">On Paper</option>
            <option value="NONE">No Submission</option>
          </select>
          <div className="mb-2 font-semibold">Online Entry Options</div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-website-url" defaultChecked />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className="mb-2 flex items-center gap-2">
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>
      </div>
      <div className="mb-4 flex items-start gap-4">
        <div className="w-1/4 shrink-0 pt-2 text-right">Assign</div>
        <div className="w-full rounded border border-neutral-300 p-3">
          <label htmlFor="wd-assign-to" className="mb-1 block font-semibold">
            Assign to
          </label>
          <input
            id="wd-assign-to"
            defaultValue="Everyone"
            className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
          />
          <label htmlFor="wd-due-date" className="mb-1 block font-semibold">
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            value={assignment.due}
            onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
            className="mb-3 w-full rounded border border-neutral-300 px-3 py-2"
          />
          <div className="flex gap-3">
            <div className="flex-1">
              <label
                htmlFor="wd-available-from"
                className="mb-1 block font-semibold"
              >
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                value={assignment.available}
                onChange={(e) =>
                  setAssignment({ ...assignment, available: e.target.value })
                }
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="wd-available-until"
                className="mb-1 block font-semibold"
              >
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                value={assignment.until ?? ""}
                onChange={(e) =>
                  setAssignment({ ...assignment, until: e.target.value })
                }
                className="w-full rounded border border-neutral-300 px-3 py-2"
              />
            </div>
          </div>
        </div>
      </div>
      <label htmlFor="wd-ai-editor-notes" className="mb-1 block">
        Sample notes
      </label>
      <textarea
        id="wd-ai-editor-notes"
        rows={3}
        className="mb-4 w-full rounded border border-neutral-300 px-3 py-2 font-sans"
      />
      <hr className="mb-3 border-neutral-300" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-black no-underline"
        >
          Cancel
        </Link>
        <button
          type="button"
          onClick={save}
          id="wd-save"
          className="rounded bg-red-600 px-3 py-1.5 text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
