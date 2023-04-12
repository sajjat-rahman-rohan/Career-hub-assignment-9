import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobReview from "../JobReview/JobReview";

const AppliedJobs = () => {
  const appliedJobs = useLoaderData();
  const [displayJob, setDisplayJob] = useState([]);
  const [selectedJobType, setselectedJobType] = useState("");
  const [selectedJobTime, setSelectedJobTime] = useState();

  useEffect(() => {
    var filterJob = filterByJobType(appliedJobs);
    var filterJob = filterByJobTime(filterJob);
    setDisplayJob(filterJob);
  }, [selectedJobType, selectedJobTime]);

  const filterByJobType = (filterJob) => {
    if (!selectedJobType) {
      return filterJob;
    }

    const filteredJob = filterJob.filter(
      (job) => job.type1.split(" ").indexOf(selectedJobType) !== -1
    );
    return filteredJob;
  };

  const filterByJobTime = (filterJob) => {
    if (!selectedJobTime) {
      return filterJob;
    }

    const filteredJob = filterJob.filter(
      (job) => job.type2.split(" ").indexOf(selectedJobTime) !== -1
    );
    return filteredJob;
  };

  const handleJobTypeChange = (event) => {
    setselectedJobType(event.target.value);
  };
  const handleJobTimeChange = (event) => {
    setSelectedJobTime(event.target.value);
  };

  return (
    <div>
      <div className="nav-banner job-detail text-center">
        <h2>Applied Job: {appliedJobs.length}</h2>
      </div>
      <div className="my-container chart">
        <div className="review-container">
          <div className="filter-btn d-flex gap-4 justify-content-end">
            <select
              id="brand-input"
              value={selectedJobType}
              onChange={handleJobTypeChange}
            >
              <option value=""> Filter By Job Type</option>
              <option value="Remote">Remote</option>
              <option value="Onsite">Onsite</option>
            </select>
            <select
              id="brand-input"
              value={selectedJobTime}
              onChange={handleJobTimeChange}
            >
              <option value=""> Filter By Job Time</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
            </select>
          </div>
          {displayJob.map((applied) => (
            <JobReview key={applied.id} applied={applied}></JobReview>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
