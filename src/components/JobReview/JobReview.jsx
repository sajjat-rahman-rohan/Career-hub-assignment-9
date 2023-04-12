import React, { useState } from "react";
import "./JobReview.css";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const JobReview = ({ applied }) => {
  const { id, logo, title, company_name, type1, type2, location, salary } =
    applied;

  return (
    <div className=" d-md-flex justify-content-between align-items-center review-item my-4">
      <div className=" d-md-flex  align-items-center gap-5 ">
        <div className="img">
          <img src={logo} alt="" />
        </div>
        <div className="review-details">
          <h2>{title}</h2>
          <h3>{company_name}</h3>
          <div className="type d-flex gap-3 align-items-center">
            <button>{type1}</button>
            <button>{type2}</button>
          </div>
          <div className="location-salary d-flex gap-4">
            <p>
              <MapPinIcon className="heroicon" /> {location}
            </p>
            <p>
              <CurrencyDollarIcon className="heroicon" /> {salary}
            </p>
          </div>
        </div>
      </div>
      <Link to={`/jobdetail/${id}`}>
        <div className="apply-btn">
          <button>View Details</button>
        </div>
      </Link>
    </div>
  );
};

export default JobReview;
