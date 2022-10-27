import React from "react";
import { Link } from "react-router-dom";
import { FaRegClock, FaStar, FaUserGraduate } from "react-icons/fa";
const Course = ({ course }) => {
  const {
    title,
    image_url,
    _id,
    students,
    total_view,
    rating: { number },
    author: { name, img },
  } = course;

  return (
    <div className="shadow-2xl">
      <div className="m-2">
        <img src={image_url} className="h-48" alt="" />
      </div>

      <h3 className="text-2xl p-2">
        <Link to={`/course/${_id}`}>{title}</Link>
      </h3>
      <div className="text-cyan-800 flex justify-between mx-2 ">
        <div className="flex items-center p-2">
          <img className="w-7 h-7 rounded-full" src={img} alt="" />
          <Link to="" className="ml-2">
            {name}
          </Link>
        </div>
        <div className="flex items-center">
          <FaStar className="mr-2 text-yellow-800" />({number})
        </div>
      </div>

      {/* Course Student and watch */}
      <div className="text-cyan-800 flex justify-between mx-2 ">
        <div className="flex items-center p-2">
          <FaUserGraduate className="mr-2" />
          <p>{students}</p>
        </div>
        <div className="flex items-center">
          <FaRegClock className="mr-2" />
          <p>({total_view})</p>
        </div>
      </div>
      {/* Couse info and buy BTN */}
      <div className="flex justify-between my-2 mx-2 p-2">
        <Link to={`/course/${_id}`}>
          <button className="p-2 text-cyan-50 bg-cyan-900 rounded-md font-semibold">
            Course Info
          </button>
        </Link>
        <Link to={`/checkout/${_id}`}>
          <button className="p-2 text-cyan-50 bg-cyan-900 rounded-md font-semibold">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Course;
