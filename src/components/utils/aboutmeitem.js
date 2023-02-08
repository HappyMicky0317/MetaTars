import React, { useState } from "react";

const AboutMeItem = (props) => {
  return (
    <div className="about-me-item d-flex align-items-start pb-3 pt-5">
      {/* <h1 className="pe-4">{props.step}</h1> */}
      <div className=""><img src={props.img} className="star" /></div>
      <p className="pt-3" data-aos="zoom-in-up" data-aos-duration="1000">{props.content}</p>
    </div>
  );
};

export default AboutMeItem;
