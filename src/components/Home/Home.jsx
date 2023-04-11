import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./Home.css";
import toast from "react-hot-toast";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
// import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      {/* <FeaturedJobs></FeaturedJobs> */}
    </div>
  );
};

export default Home;
