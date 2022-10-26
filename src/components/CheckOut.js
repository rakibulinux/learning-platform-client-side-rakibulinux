import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const checkOutinfo = useLoaderData();
  console.log(checkOutinfo);
  const { title, image_url, details } = checkOutinfo;
  return (
    <div className="w-9/12 mx-auto shadow-2xl p-4">
      <div className="flex justify-center flex-col">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
