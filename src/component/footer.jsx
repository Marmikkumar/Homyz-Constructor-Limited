import React from "react";
import "../styles.css";
import Homenav from "../component/homenav";

function Footer() {
  return (
    <div className="footer" id="ftr">
      <div style={{ height: "8vh", width: "100vw" }}></div>
      <div className="getstarted">
        <h1>Get started with Homyz</h1>
        <p>Subscribe and find super attractive price quotes from us</p>
        <p> Find your residence soon</p>
        <button type="submit">Get started</button>
      </div>
      <div className="end">
        <div className="end1">
          <img src="https://real-estate-web.pages.dev/logo2.png" alt="" />
          <p>Our vision is to make all people</p>
          <p>the best place to live for them.</p>
        </div>
        <div className="end2">
          <h1>Information</h1>
          <p>145 New York, FL 5467,USA </p>
          <ul className="endol">
            <li>Property</li>
            <li>Services</li>
            <li>Product</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
