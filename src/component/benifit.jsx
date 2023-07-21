import React, { useState } from "react";
import "../styles.css";

function Benifit() {
  const [key1, setkey1] = useState(true);
  const [key2, setkey2] = useState(false);
  const [key3, setkey3] = useState(false);

  function handleclick1() {
    return setkey1(true), setkey2(false), setkey3(false);
  }

  function handleclick2() {
    return setkey1(false), setkey2(true), setkey3(false);
  }

  function handleclick3() {
    return setkey1(false), setkey2(false), setkey3(true);
  }

  return (
    <div>
      <div
        className="benifithead"
        style={{ boxShadow: key1 ? "0px 12px rgba(173, 216, 230 ,0.5)" : "" }}
      >
        <div className="bhead">
          <i class="fa-solid fa-square-check b1"></i>
          <h3>Best interest rates on the market</h3>
          <i onClick={handleclick1} class="fa-solid fa-caret-down b1"></i>
        </div>
        {key1 ? (
          <p>
            Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
            occaecat ut occaecat consequat est minim minim esse tempor laborum
            consequat esse adipisicing eu reprehenderit enim
          </p>
        ) : (
          ""
        )}
      </div>

      <div
        className="benifithead"
        style={{ boxShadow: key2 ? "0px 12px rgba(173, 216, 230 ,0.5)" : "" }}
      >
        <div className="bhead">
          <i class="fa-solid fa-store b1"></i>
          <h3>Best price on the market world </h3>
          <i onClick={handleclick2} class="fa-solid fa-caret-down b1"></i>
        </div>
        {key2 ? (
          <p>
            Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
            occaecat ut occaecat consequat est minim minim esse tempor laborum
            consequat esse adipisicing eu reprehenderit enim
          </p>
        ) : (
          ""
        )}
      </div>

      <div
        className="benifithead"
        style={{ boxShadow: key3 ? "0px 12px rgba(173, 216, 230 ,0.5)" : "" }}
      >
        <div className="bhead">
          <i class="fa-solid fa-chart-simple b1"></i>
          <h3> have best manufacture designer</h3>
          <i onClick={handleclick3} class="fa-solid fa-caret-down b1"></i>
        </div>
        {key3 ? (
          <p>
            Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
            occaecat ut occaecat consequat est minim minim esse tempor laborum
            consequat esse adipisicing eu reprehenderit enim
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Benifit;
