import React from "react";
import "../styles.css";
import { motion } from "framer-motion";

import Homenav from "../component/homenav";
import Residencies from "./Residencies";
import Ourvalue from "./ourvalue";
import Contact from "./Contact";
import Footer from "./footer";

function Home() {
  return (
    <div id="home">
      <div className="homepage">
        <Homenav />
        <div className="content">
          <motion.div
            animate={{ y: 0 }}
            initial={{ y: 40 }}
            transition={{ duration: 1 }}
          >
            <h1>
              Discover <br />
              Most Suitable <br /> Property
            </h1>
          </motion.div>
          <p>
            Find a variety of properties that suit you very easilty Forget all
            difficulties in finding a residence for you
          </p>
          <div className="box">
            <i class="fa-solid fa-location-dot"></i>
            <input type="text" />
            <button type="submit">Search</button>
          </div>

          <div className="price">
            <div className="pricevalue">
              <p>9,000 +</p>
              <p>Premium Product</p>
            </div>
            <div className="pricevalue">
              <p>2,000 +</p>
              <p>Happy Customer</p>
            </div>
            <div className="pricevalue">
              <p>28 +</p>
              <p>Awards Winning</p>
            </div>
          </div>
        </div>

        <motion.div
          animate={{ x: 0, y: -50 }}
          initial={{ x: 100, y: -50 }}
          transition={{ duration: 2 }}
          className="homeimg"
        >
          <img
            src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1aWxkaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
        </motion.div>
      </div>
      {/* <Residencies />
      <Ourvalue />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default Home;
