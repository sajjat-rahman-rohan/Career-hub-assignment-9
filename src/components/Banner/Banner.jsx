import React from "react";
import logo from "../../assets/All Images/P3OLGJ1 copy 1.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="nav-bannerr pt-3">
      <div className="my-container">
        <div className="row">
          <div className="col-lg-6 banner-text mt-5">
            <h2>
              One Step Closer To Your <span>Dream Job</span>
            </h2>
            <p>
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <div className="apply-btn">
              <button>Get Started</button>
            </div>
          </div>
          <div className="col-lg-6 banner-img">
            <img src={logo} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
