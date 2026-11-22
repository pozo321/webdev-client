import axios from "axios";
import { httpServer } from "@/app/lib/httpServer";

const COURSES_API = `${httpServer()}/api/courses`;
const ASSIGNMENTS_API = `${httpServer()}/api/assignments`;

export const findAssignmentsForCourse = async (courseId: string) => {
  const { data } = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return data;
};

export const createAssignmentForCourse = async (
  courseId: string,
  assignment: unknown,
) => {
  const { data } = await axios.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment,
  );
  return data;
};

export const updateAssignment = async (assignment: { _id: string }) => {
  const { data } = await axios.put(
    `${ASSIGNMENTS_API}/${assignment._id}`,
    assignment,
  );
  return data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const { data } = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return data;
};
