import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import LeftSide from "./LeftSide";

const CourseDetails = () => {
  const courseInfo = useLoaderData();
  console.log(courseInfo);
  const { title, image_url, details } = courseInfo;
  return (
    <div className="courses">
      <div className="">
        <LeftSide />
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex justify-center flex-col">
          <img src={image_url} alt="" />
          <div>
            <h2 className="text-3xl my-5">{title}</h2>
            <p>{details}</p>
            <Link to={`/courses`}>
              <button>View All Courses</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
