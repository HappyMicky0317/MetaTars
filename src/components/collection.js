import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
//import components
import Art from "./utils/art";
import axios from "axios"
import ValidateEmail from "../helper/validateEmail";
import configJson from "../config/default.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Collection = () => {
  const [arts, setArts] = useState([
    { image: "art1.png", name: "Bestorm_1" },
    { image: "art2.png", name: "Bestorm_3" },
    { image: "art3.png", name: "Bestorm_3" },
    { image: "art4.png", name: "Bestorm_4" },
    { image: "art5.png", name: "Bestorm_5" },
    { image: "art6.png", name: "Bestorm_6" },
  ]);
  const [whiteListEmail, setWhiteListEmail] = useState("");
  const [loading, setLoading] = useState(false);
  // send subscribe email 
  const whiteList = () => {
    setLoading(true);
    if (ValidateEmail(whiteListEmail) == true) {
      const params = { email: whiteListEmail ,list_id :"WHITELIST"};
      axios.post(`${configJson.SERVER_URL}`, params).then((res) => {
        setWhiteListEmail('');
        toast(res.data.msg);
        setLoading(false);
      }).catch(err=>{
        setLoading(false);
        if(err.response.status == 400){
          toast(err.response.data.msg);
        }else{
           toast('Something went wrong');
        }
      });
    } else {
      toast("email is not correct!");
      setLoading(false);
    }
  };

  return (
    <Row className="mx-0 collection-control d-flex justify-content-center align-items-center">
      <div xl={5} lg={12} className="pe-2 mb-5 col-xl-5 col-lg-12">
        <h3 className="metal-load">PRESALE WHITELIST RAFFLE</h3>
        <div className="description mt-5">
            Join the whitelist raffle by signing your email address here
            <div className="email-input mt-3">
              <input
                type="email"
                placeholder="name@email.com"
                value={whiteListEmail}
                onChange={(e) => setWhiteListEmail(e.target.value)}
              />
              
              <button>
                  {loading ? (<img
                    width={`25px`}
                    src="/images/icons/loading.gif"
                  />):(<img
                    src="/images/icons/send-white.png"
                    onClick={() => {
                      whiteList();
                    }}
                  />)}
              </button>
             
            </div>
        </div>
      </div>
      <div className="col-xl-7 col-lg-12">
        <Row>
          {arts.map((item, index) => {
            return (
              <Col xs={6} md={4} key={index} className="mb-4">
                <Art image={"/arts/" + item.image}  />
              </Col>
            );
          })}
        </Row>
        {/* <Row className="d-flex justify-content-center align-items-center">
          <Col xs={4}>
            <Link to="/collectable">
              <button className="btn btn-primary rounded-pill w-100">
                VIEW ALL
              </button>
            </Link>
          </Col>
        </Row> */}
      </div>
    </Row>
  );
};

export default Collection;
