import React, { useState } from "react";

import { Row, Col, Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { setWalletAddress } from "../actions/dash";

import axios from "axios"
import ValidateEmail from "../helper/validateEmail";
import configJson from "../config/default.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HelmetMetaData from "./utils/HelmetMetaData";

const Banner = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);


 

  // send email for subscription
  const sendEmail = () => {
    setLoading(true);
    if (ValidateEmail(email) == true) {
      const params = { email: email ,list_id:"NOTIFY"};
        axios.post(`${configJson.SERVER_URL}`, params).then((res) => {
        setEmail('');
        toast(res.data.msg);
        setLoading(false);
      }).catch(err=>{
        setLoading(false);
        if(err.response.status == 400){
          toast(err.response.data.msg);
        }else{}
        toast('Something went wrong');
      });
    } else {
      setLoading(false);
      toast("email is not correct!");
    }
  };

  

  return (
  <>
  
      {/* <HelmetMetaData title="Destrom Power - #1 Genesis Collection"
          description="Destorm Power is an American actor, comedian, rapper and Internet
          personality with over 8 million followers on Tik Tok and over 3
          million subscribers on You Tube."
      ></HelmetMetaData> */}
    <Row className="d-flex mx-0 banner-control">
      <Col xl={5} lg={12}>
        <Row>
          <Col className="banner-item">
            <div
              style={{
                flex: 7,
                background: "#BB4196",
                borderBottomLeftRadius: "1000px",
                borderBottomRightRadius: "1000px",
              }}
              className="banner-top"
            >
              <img src="/images/banner/banner4.png" />
            </div>
            <div
              style={{ flex: 3, borderRadius: "1000px" }}
              className="banner-bottom"
            >
              <img src="/images/banner/banner1.png" />
            </div>
          </Col>
          <Col className="banner-item">
            <div
              style={{
                flex: 4,
                background: "#CB1C18",
                borderBottomLeftRadius: "1000px",
                borderBottomRightRadius: "1000px",
              }}
              className="banner-top"
            >
              <img src="/images/banner/banner5.png" />
            </div>
            <div
              style={{ flex: 6, borderRadius: "1000px" }}
              className="banner-bottom"
            >
              <img src="/images/banner/banner2.png" />
            </div>
          </Col>
          <Col className="banner-item">
            <div
              style={{
                flex: 5,
                background: "#8C75FF",
                borderBottomLeftRadius: "1000px",
                borderBottomRightRadius: "1000px",
              }}
              className="banner-top"
            >
              <img src="/images/banner/banner6.png" />
            </div>
            <div
              style={{ flex: 5, borderRadius: "1000px" }}
              className="banner-bottom"
            >
              <img src="/images/banner/banner3.png" />
            </div>
          </Col>
        </Row>
      </Col>
      <Col xl={1} />
      <Col lg={12} xl={6} className="banner-description" data-aos="zoom-in-up">
        <h3 className="mb-3 metal-load" >
          MetaTars <br /> <span> #1 Genesis Collection</span>
        </h3>
        <p>
        MetaTars Genesis is a collection of 666 alien-like humanoids created by DeStorm Power. The Genesis collection name is derived from the premier release of the MetaTars collectables. This is only the beginning - there is much more to come. 
        </p>
        {/* <Button className="rounded-pill" onClick={connectWallet}>
          {walletAddress == "" ? "Get Notified for launch" : walletAddress}
        </Button> */}

        <p className="mt-5 ps-3 notify-text">
          Notify me when MetaTars is available to buy
        </p>
        <div className="email-input">
          <input
            type="email"
            placeholder="name@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>
            {loading ? (<img
              width={`25px`}
              src="/images/icons/loading.gif"
            />):(<img
              src="/images/icons/send-white.png"
              onClick={() => {
                sendEmail();
              }}
            />)}
          </button>
        </div>
      </Col>
      <Col xl={12} lg={12}>
        <Row>
          <Col>
           
          </Col>
          <Col>

          </Col>
        </Row>
      </Col>

    </Row>
  </>
    
  );
};

export default Banner;
