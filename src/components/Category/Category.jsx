import React, { useEffect, useState } from "react";
import "./Category.css";
import SingleCategory from "../SingleCategory/SingleCategory";

const Category = () => {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch("../../../public/category.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);

  return (
    <div className="my-container text-center">
      <div className="category ">
        <h2>Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="d-flex justify-content-between align-items-center text-start mt-4">
          {categorys.map((category) => (
            <SingleCategory
              key={category.id}
              category={category}
            ></SingleCategory>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
