import React from "react";
import { Row, Col } from "react-bootstrap";

const ArtCollection = () => {
  return (
    <Row className="art-collection d-flex mx-0">
      <Col lg={7} md={6}>
        <h3 className="mb-3">I'm destorm power,</h3>
        <h2 style={{ marginBottom: "100px" }}>NFT Art Collection</h2>
        <p>
          DeStorm Power is an American actor, comedian, rapper and Internet
          personality with over 8 million followers on Tik Tok and over 3
          million subscribers on YouTube. He has been nominated for a total of
          nine Streamy Awards and he received an Emmy nominatio
        </p>
      </Col>
      <Col lg={5} md={6} className="ps-lg-5">
        <Row>
          <Col xs={6} className="art-listed-image">
            <div className="listed-image-type1">
              <img src="/arts/listed/1.png" />
            </div>
            <div className="listed-image-type2">
              <img src="/arts/listed/2.png" />
            </div>
          </Col>
          <Col xs={6} className="art-listed-image">
            <div className="listed-image-type2">
              <img src="/arts/listed/3.png" />
            </div>
            <div className="listed-image-type1">
              <img src="/arts/listed/4.png" />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ArtCollection;
