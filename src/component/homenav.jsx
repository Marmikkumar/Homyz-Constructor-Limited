import React from "react";
import "../styles.css";
import { Link } from "react-scroll";

function Homenav() {
  return (
    <div className="navpage">
      <img src="https://real-estate-web.pages.dev/logo2.png" alt="" />
      <ul className="ref">
        <li>
          <Link
            className="L1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="L1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="residencies"
          >
            Residencies
          </Link>
        </li>
        <li>
          <Link
            className="L1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="ourvalue"
          >
            Our Value
          </Link>
        </li>
        <li>
          <Link
            className="L1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="contact"
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            className="L1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="ftr"
          >
            Get Started
          </Link>
        </li>
        <li>
          <Link
            className="L1"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="contact"
          >
            <button type="submit">Contact</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Homenav;
