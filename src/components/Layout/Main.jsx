import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Main = () => {
  // const navigation = useNavigation();
  // // console.log(navigation.state);
  // if (navigation.state === "loading") {
  //   return <LoadingSpinner />;
  // }
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Main;
