import React, { useState } from "react";
import "./FeaturedJobs.css";
import { useLoaderData } from "react-router-dom";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const jobs = useLoaderData();

  return (
    <div className="my-container text-center">
      <div className="category ">
        <h2>Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="jobs mt-4">
          {jobs.record.map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
        <div className="apply-btn mt-5">
          <button>See All Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
