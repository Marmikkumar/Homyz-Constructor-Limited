import React from "react";

function Call(props) {
  return (
    <div className="call">
      <div className="calldesign">
        <i class={props.icon}></i>
        <div style={{ padding: " 2% 5%" }}>
          <h2>{props.title}</h2>
          <p>{props.ph}</p>
        </div>
      </div>
      <button type="submit">{props.btn}</button>
    </div>
  );
}

export default Call;
