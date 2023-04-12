import React from "react";
import "./SingleCategory.css";

const SingleCategory = ({ category }) => {
  const { id, icon, name, title } = category;
  return (
    <div>
      <div className="single-category ">
        <img src={icon} alt="" />
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SingleCategory;
