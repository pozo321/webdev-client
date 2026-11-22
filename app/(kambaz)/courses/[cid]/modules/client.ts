import axios from "axios";
import { httpServer } from "@/app/lib/httpServer";

const COURSES_API = `${httpServer()}/api/courses`;
const MODULES_API = `${httpServer()}/api/modules`;

export const findModulesForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

export const createModuleForCourse = async (
  courseId: string,
  module: unknown,
) => {
  const response = await axios.post(`${COURSES_API}/${courseId}/modules`, module);
  return response.data;
};

export const deleteModule = async (moduleId: string) => {
  const response = await axios.delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};

export const updateModule = async (module: { _id: string }) => {
  const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
  return data;
};
