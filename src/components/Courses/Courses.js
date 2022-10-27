import React from "react";
import { useLoaderData } from "react-router-dom";
import LeftSide from "../LeftSide/LeftSide";
import "./Courses.css";
import Course from "../Course/Course";
const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="courses">
      <div className="">
        <LeftSide />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
        {courses.map((course) => (
          <Course key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
