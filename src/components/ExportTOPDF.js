import React from "react";
import { Link } from "react-router-dom";

const ExportTOPDF = ({ courseInfo, inputRef }) => {
  const { title, image_url, details } = courseInfo;
  return (
    <div ref={inputRef} className="flex justify-center flex-col">
      <img src={image_url} alt="" />
      <div>
        <h2 className="text-3xl my-5">{title}</h2>
        <p>{details}</p>
        <Link className="text-center" to={`/courses`}>
          <button className="bg-cyan-900 text-cyan-50 p-2 rounded-md my-5">
            View All Courses
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ExportTOPDF;
