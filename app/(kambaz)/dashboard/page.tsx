"use client";

import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import * as coursesClient from "../courses/client";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { useAccountContext } from "../account/AccountContext";

export default function Dashboard() {
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const { currentUser } = useAccountContext();
  const [myCourses, setMyCourses] = useState<Course[]>([]);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const visibleCourses =
    currentUser && !showAllCourses ? myCourses : courses;

  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const fetchCourses = async () => {
      setCourses(await coursesClient.fetchAllCourses());
      if (currentUser) {
        setMyCourses(await coursesClient.findMyCourses());
      } else {
        setMyCourses([]);
      }
    };
    fetchCourses();
  }, [currentUser, refresh, setCourses]);

  const fetchCourses = () => setRefresh(refresh + 1);

  const onAddCourse = async () => {
    await coursesClient.createCourse(course);
    fetchCourses();
  };

  const onUpdateCourse = async () => {
    await coursesClient.updateCourse(course);
    fetchCourses();
  };

  const onDeleteCourse = async (courseId: string) => {
    await coursesClient.deleteCourse(courseId);
    fetchCourses();
  };

  const onEnroll = async (courseId: string) => {
    if (!currentUser) return;
    await coursesClient.enrollIntoCourse(currentUser._id, courseId);
    fetchCourses();
  };

  const onUnenroll = async (courseId: string) => {
    if (!currentUser) return;
    await coursesClient.unenrollFromCourse(currentUser._id, courseId);
    fetchCourses();
  };

  return (
    <div id="wd-dashboard">
      <div className="flex items-center justify-between">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-enrollments-toggle"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          Enrollments
        </button>
      </div>
      <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={onAddCourse}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={onUpdateCourse}
        >
          Update
        </button>
      </h5>
      <input
        className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        rows={3}
        value={course.description}
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
        id="wd-course-description"
      />
      <input
        className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <input
        type="date"
        className="mb-3 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-start-date"
      />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({visibleCourses.length})
      </h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {visibleCourses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            enrolled={myCourses.some((mine) => mine._id === c._id)}
            onEdit={() => setCourse(c)}
            onDelete={() => onDeleteCourse(c._id)}
            onEnroll={() => onEnroll(c._id)}
            onUnenroll={() => onUnenroll(c._id)}
          />
        ))}
      </div>
    </div>
  );
}
