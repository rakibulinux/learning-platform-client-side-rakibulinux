import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const {
    title,
    details,
    image_url,
    _id,
    rating: { badge, number },
    author: { name, img, published_date },
  } = course;
  console.log(_id);
  return (
    <div className="h-[100vh]">
      <div className="m-2">
        <img src={image_url} className="h-48" alt="" />
      </div>
      <div className="">
        <h3 className="text-2xl p-2">
          <Link to={`/course/${_id}`}>{title}</Link>
        </h3>
        <div className="">
          <div className="">
            <div className="flex items-center p-2">
              <img className="w-7 h-7 rounded-full" src={img} alt="" />
              <Link to="" className="ml-2">
                {name}
              </Link>
            </div>
          </div>
          <div className="">{number}</div>
        </div>
        <div className="course-meta"></div>
        <div className="flex justify-between p-2">
          <Link to={`/course/${_id}`}>
            <button className="p-2 text-cyan-50 bg-cyan-900 rounded-md font-semibold">
              Course Info
            </button>
          </Link>
          <Link to={`/course/${_id}`}>
            <button className="p-2 text-cyan-50 bg-cyan-900 rounded-md font-semibold">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
