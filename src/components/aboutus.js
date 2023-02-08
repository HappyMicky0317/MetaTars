import React, { useState,useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from 'aos';
//import component
import AboutMeItem from "./utils/aboutmeitem";
const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
    
  }, []);
  const [aboutMe, setAboutMe] = useState([
    {
      step: "01",
      image:"/images/aboutme/giveaway_money.svg",
      content:
        "Early giveaway drop of $5,000 to 10 people",
    },
    {
      step: "02",
      image:"/images/aboutme/giveaway_gift.svg",
      content:
        "Give away 10% (66 NFTs) for free when 50% of the MetaTars NFTs sell out",
    },
    {
      step: "03",
      image:"/images/aboutme/launch.svg",
      content: `1 ETH (each) giveaway to 3 people during launch hour`,
    },
    {
      step: "04",
      image:"/images/aboutme/yacht.svg",
      content: `Big yacht bikini party to ALL of holders parties in LA`,
    },

  ]);
  return (
    <Row className="aboutus-control d-flex mx-0" id="aboutus">
      <div className="d-flex align-items-start justify-content-center flex-column gap-3 col-lg-6 col-md-12">
        <h3 className="metal-load mt-5">How MetaTars will benefit buyers?</h3>
        <div className="d-flex align-items-center my-3">
          <div lg={5} md={12}>
            <img src="/images/aboutme/metatars_destorm.gif" className="metatars_destorm" style={{ width: "70%" }} />
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-lg-6 col-md-12">
        {aboutMe.map((item, index) => {
          return (
            <AboutMeItem key={index} img={item.image} step={item.step} content={item.content} />
          );
        })}
      </div>
    </Row>
  );
};

export default AboutUs;
