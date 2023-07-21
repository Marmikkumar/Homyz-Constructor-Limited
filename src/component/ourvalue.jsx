import React from "react";
import "../styles.css";
import Benifit from "./benifit";

function Ourvalue() {
  return (
    <div className="value" id="ourvalue">
      <div className="figure">
        <img src="https://real-estate-web.pages.dev/value.png" alt="v1" />
      </div>
      <div className="valuecontent">
        <div className="valueheading">
          <h2>Our Value</h2>
          <h1>Value We Give to You</h1>
          <p>
            We always ready to help by providijng the best services for you We
            beleive a good blace to live can make your life better
          </p>
        </div>
        <Benifit />
      </div>
    </div>
  );
}

export default Ourvalue;
