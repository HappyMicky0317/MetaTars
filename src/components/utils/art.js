import React from "react";

import "./art.scss";
const Art = (props) => {
  return (
    <div className="art-item">
      <div>
        <img src={props.image} />
      </div>
      <p>{props.name}</p>
    </div>
  );
};

export default Art;
