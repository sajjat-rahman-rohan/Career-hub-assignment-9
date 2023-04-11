import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./JobDetails.css";
import toast from "react-hot-toast";
import { addToDb } from "../../utilities/fakedb";

const JobDetails = () => {
  const job = useLoaderData();

  const {
    job_discription,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    title,
    phone,
    email,
    address,
    company_name,
  } = job.record;

  const jobss = job.record;

  // const [cart, setCart] = useState([]);

  // const handleAddToCart = (jobss) => {
  //   // console.log(jobss);
  //   // let newCart = [];
  //   const newCart = [...cart, job];

  //   setCart(newCart);
  //   addToDb(jobss.id);

  //   toast.success("Apply success! 👍", { autoClose: 500 });
  // };

  return (
    <div>
      <div className="nav-banner job-detail text-center">
        <h2>Job Details</h2>
      </div>
      <div className="my-container job-details  mt-5">
        <div>
          <p>
            <span>Job Description:</span> {job_discription}
          </p>
          <p>
            <span>Job Responsibility:</span> {job_responsibility}
          </p>
          <p>
            <p>
              <span>Educational Requirements:</span>
            </p>
            {educational_requirements}
          </p>
          <p>
            <p>
              <span>Experiences:</span>
            </p>
            {experiences}
          </p>
        </div>
        <div>
          <div className="details-contact">
            <h3>Job Details :</h3>
            <hr />
            <p>
              <span>Company Name :</span> {company_name}
            </p>
            <p>
              <span>Job Title :</span> {title}
            </p>
            <p>
              <span>Salary :</span> {salary}(Per Month)
            </p>

            <h3>Contact Information :</h3>
            <hr />
            <p>
              <span>Phone :</span> {phone}
            </p>
            <p>
              <span>Email : </span>
              {email}
            </p>
            <p>
              <span>Address :</span> {address}
            </p>
          </div>
          <div className="apply-btn  m-2">
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
