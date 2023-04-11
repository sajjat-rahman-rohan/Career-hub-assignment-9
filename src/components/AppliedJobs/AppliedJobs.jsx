import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobReview from "../JobReview/JobReview";
// import { ChevronDownIcon } from "@heroicons/react/24/solid";

const AppliedJobs = () => {
  const appliedJobs = useLoaderData();

  // const [state, setstate] = useState();

  // const handle = (e) => {
  //   const tg = e.target.value;

  //   if (tg) {
  //     const flt = state.filter(
  //       (st) => st.onsiteOrRemote == tg || st.partOrfullTime == tg
  //     );
  //     setstate(flt);
  //   } else {
  //     setstate(state);
  //   }
  // };

  return (
    <div>
      <div className="nav-banner job-detail text-center">
        <h2>Applied Job: {appliedJobs.length}</h2>
      </div>
      <div className="my-container chart">
        <div className="review-container">
          <div className="filter-btn d-flex justify-content-end">
            <select name="isAll">
              <option value="all"> Filter By</option>
              <option value="remote">Remote</option>
              <option value="onside">Onside</option>
            </select>
          </div>
          {appliedJobs.map((applied) => (
            <JobReview key={applied.id} applied={applied}></JobReview>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
