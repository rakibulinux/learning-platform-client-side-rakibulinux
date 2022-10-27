import React, { createRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import LeftSide from "../LeftSide/LeftSide";
import Pdf from "react-to-pdf";

const ref = createRef();

const CourseDetails = () => {
  const courseInfo = useLoaderData();
  console.log(courseInfo);
  const { _id, title, image_url, details } = courseInfo;
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [40, 20],
  };
  return (
    <div className="courses ">
      <div>
        <LeftSide />
      </div>
      <div className="grid grid-cols-1 gap-4 shadow-2xl p-4">
        <Pdf targetRef={ref} filename={`${title}`} options={options}>
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="bg-cyan-900 text-cyan-50 hover:bg-cyan-600 font-semibold py-2 w-32 mx-auto rounded-md"
            >
              Export to PDF
            </button>
          )}
        </Pdf>
        <div ref={ref} className="flex justify-center flex-col">
          <img src={image_url} alt="" />
          <div>
            <h2 className="text-3xl my-5">{title}</h2>
            <p>{details}</p>
            <div className="flex justify-center gap-4">
              <Link className="text-center" to={`/courses`}>
                <button className="bg-cyan-900 text-cyan-50 hover:bg-cyan-600 p-2 rounded-md my-5">
                  View All Courses
                </button>
              </Link>
              <Link className="text-center" to={`/checkout/${_id}`}>
                <button className="bg-cyan-900 text-cyan-50 hover:bg-cyan-600 p-2 rounded-md my-5">
                  Get premium access
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
