import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Category from "../Category/Category";
import Banner from "../Banner/Banner";
import toast from "react-hot-toast";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
