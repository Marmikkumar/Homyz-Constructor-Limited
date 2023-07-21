import React, { useState } from "react";
import "../styles.css";
import scroll from "../scroll";
import Homenav from "../component/homenav";

function Residencies() {
  const [key, setkey] = useState(4);

  function Larrow() {
    setkey(key !== 3 ? key - 1 : 3);
  }

  function Rarrow() {
    setkey(key < scroll.length - 1 ? key + 1 : scroll.length - 1);
  }

  const larrow = "<";
  const rarrow = ">";

  const arrow = {
    display: "flex",
    float: "right",
    margin: "1%"
  };

  return (
    <div id="residencies">
      <div className="symbol">
        <img src="https://real-estate-web.pages.dev/prologis.png" alt="p1" />
        <img src="https://real-estate-web.pages.dev/tower.png" alt="" />
        <img src="https://real-estate-web.pages.dev/equinix.png" alt="" />
        <img src="https://real-estate-web.pages.dev/realty.png" alt="" />
      </div>

      <div style={{ margin: "5%" }}>
        <h3 style={{ color: "orange", fontSize: "1.5rem" }}>Best Choices</h3>
        <h2 style={{ color: "indigo", fontSize: "2.5rem" }}>
          Popular Residencies
        </h2>
        <div style={arrow}>
          <button type="submit" onClick={Larrow} className="arrowbutton">
            {larrow}
          </button>
          <button type="submit" onClick={Rarrow} className="arrowbutton">
            {rarrow}
          </button>
        </div>
      </div>

      <div className="scrollimage">
        <div className="scroll">
          <img src={scroll[0].image} alt="flat1" />
          <p style={{ fontSize: "1.2rem" }}>
            <span>$ </span>
            {scroll[key - 3].price}
          </p>
          <h2>{scroll[key - 3].heading}</h2>
          <p>{scroll[key - 3].content}</p>
        </div>

        <div className="scroll">
          <img src={scroll[key - 2].image} alt="flat1" />
          <p style={{ fontSize: "1.2rem" }}>
            <span>$ </span>
            {scroll[key - 2].price}
          </p>
          <h2>{scroll[key - 2].heading}</h2>
          <p>{scroll[key - 2].content}</p>
        </div>

        <div className="scroll">
          <img src={scroll[key - 1].image} alt="flat1" />
          <p style={{ fontSize: "1.2rem" }}>
            <span>$ </span>
            {scroll[key - 1].price}
          </p>
          <h2>{scroll[key - 1].heading}</h2>
          <p>{scroll[key - 1].content}</p>
        </div>

        <div className="scroll">
          <img src={scroll[key].image} alt="flat1" />
          <p style={{ fontSize: "1.2rem" }}>
            <span>$ </span>
            {scroll[key].price}
          </p>
          <h2>{scroll[key].heading}</h2>
          <p>{scroll[key].content}</p>
        </div>
      </div>
    </div>
  );
}

export default Residencies;
