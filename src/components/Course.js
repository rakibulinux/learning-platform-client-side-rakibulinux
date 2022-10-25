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
    <div>
      <div className="">
        <div className="">
          <div className="m-2">
            <img
              loading="lazy"
              width="384"
              height="280"
              src={image_url}
              className=""
              alt=""
            />
          </div>
          <div className="">
            <h3 className="">
              <Link to="">{title}</Link>
            </h3>
            <div className="">
              <div className="">
                <div className="">
                  <img className="w-7 h-7 rounded-full" src={img} alt="" />
                </div>
              </div>{" "}
              <Link to="" className="">
                {name}
              </Link>
              <div className="">{number}</div>
            </div>
          </div>{" "}
          <div className="course-meta"></div>
          <Link to={`/course/${_id}`}>
            <button>View All Courses</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
