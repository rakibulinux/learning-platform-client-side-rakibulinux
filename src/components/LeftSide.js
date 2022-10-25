import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const LeftSide = () => {
  const categoriesInfo = useContext(AuthContext);
  const categories = categoriesInfo.categories;
  console.log(categories);
  return (
    <div>
      {categories.map((category) => (
        <p key={category.id}>
          <Link to={`/course/${category.id}`}>{category.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSide;
