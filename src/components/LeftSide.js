import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const LeftSide = () => {
  const categoriesInfo = useContext(AuthContext);
  const categories = categoriesInfo.categories;
  console.log(categories);
  return (
    <div>
      <h1 className="p-2 text-2xl">Course Topics:</h1>
      {categories.map((category) => (
        <p className="p-2" key={category.id}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-cyan-800" : undefined
            }
            to={`/course/${category.id}`}
          >
            {category.name}
          </NavLink>
        </p>
      ))}
    </div>
  );
};

export default LeftSide;
