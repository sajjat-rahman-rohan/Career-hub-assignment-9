import React from "react";
import headerLogo from "../../assets/header-logo-4.png";
import footerLogo from "../../assets/Icons/Group 9969.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="my-container footer-container">
        <div>
          <img src={headerLogo} alt="" />
          <p className="w-80">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <img src={footerLogo} alt="" />
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Work</li>
            <li>Latest News</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h3>Product</h3>
          <ul>
            <li>Prototype</li>
            <li>Plans & Pricing</li>
            <li>Customers</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>Help Desk</li>
            <li>Sales</li>
            <li>Become a Partner</li>
            <li>Developers</li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>524 Broadway , NYC</li>
            <li>+1 777 - 978 - 5570</li>
          </ul>
        </div>
      </div>
      <div className="my-container copyright d-flex justify-content-between align-items-center pt-4">
        <p>@2023 Monster. All Rights Reserved</p>
        <p>
          Powered by <span>Monster</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
