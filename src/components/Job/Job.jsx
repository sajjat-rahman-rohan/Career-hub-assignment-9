import React from "react";
import "./Job.css";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Job = (props) => {
  const { id, logo, title, company_name, type1, type2, location, salary } =
    props.job;

  return (
    <div>
      <div className="card text-start">
        <img src={logo} className="img-fluid" alt="" />
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

        <Link>
          <div className="apply-btn">
            <button>View Details</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Job;
