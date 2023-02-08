import React from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Welcome = () => {

  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Row className="welcome-control d-flex mx-0">

      <div className="react-slick-slider-section">
        <Slider {...settings}>
          <div className="slider-image">
            <img src="/arts/art7.png" className="img-fluid" alt="" />
          </div>
          <div className="slider-image">
            <img src="/arts/art8.png" className="img-fluid" alt="" />
          </div>
          <div className="slider-image">
            <img src="/arts/art9.png" className="img-fluid" alt="" />
          </div>
          <div className="slider-image">
            <img src="/arts/art7.png" className="img-fluid" alt="" />
          </div>
          <div className="slider-image">
            <img src="/arts/art8.png" className="img-fluid" alt="" />
          </div>
          <div className="slider-image">
            <img src="/arts/art2.png" className="img-fluid" alt="" />
          </div>
          <div className="slider-image">
            <img src="/arts/art10.png" className="img-fluid" alt="" />
          </div>
          <div className="slider-image">
            <img src="/arts/art11.png" className="img-fluid" alt="" />
          </div>
          <div className="slider-image">
            <img src="/arts/art2.png" className="img-fluid" alt="" />
          </div>
          <div className="slider-image">
            <img src="/arts/art10.png" className="img-fluid" alt="" />
          </div>
        </Slider>
      </div>

      <Col md={12} lg={5}>
        <Row>
          <Col lg={4} md={6} className="image-gallery image-gallery-slider">
            <img src="/arts/art7.png" alt="" />
            <img src="/arts/art8.png" alt="" />
            <img src="/arts/art9.png" alt="" />
            <img src="/arts/art7.png" alt="" />
            <img src="/arts/art8.png" alt="" />
          </Col>
          <Col lg={4} md={6} className="image-gallery image-gallery-slider mt-lg-5">
            <img src="/arts/art2.png" alt="" />
            <img src="/arts/art10.png" alt="" />
            <img src="/arts/art11.png" alt="" />
            <img src="/arts/art2.png" alt="" />
            <img src="/arts/art10.png" alt="" />
          </Col>
          <Col className="d-none">3</Col>
        </Row>
      </Col>
      <Col md={12} lg={7} className="welcome-content ">
        <div className="prefix-label d-flex align-items-center justify-content-start">
          
        </div>
        <h3 className="pb-5 metal-load">The Show Has To Go Above And Beyond The Metaverse.</h3>
        <div className="description">
          The MetaTars isn't just a collection of NFTs. It's a whole entertainment system. Our Metaverse "Metatars.club" will be expanded, and it will be owned and operated by its members.
          Our mission is to create one-of-a-kind interactive virtual concerts, festivals, and private parties with artists who are influenced by audiences and shared experiences.
          Each NFT holder uses its own token (the MetaTars Token) as currency in our ecosystem.

        </div>
      </Col>

    </Row>
  );
};
export default Welcome;
