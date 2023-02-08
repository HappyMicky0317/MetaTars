import React, { useEffect, useState } from "react";

import { Row, Col } from "react-bootstrap";
import Footer from "./footer";

import axios from "axios";
import { Link, useParams } from "react-router-dom";

import ValidateEmail from "../helper/validateEmail";
import configJson from "../config/default.json";

//toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PreviewItem from "./previewItem"
import HelmetMetaData from "./utils/HelmetMetaData";
import Share from  "./utils/share"

const CollectionItemInfo = (props) => {
  const params = useParams();
  const nft_id = params.id;

  const [email, setEmail] = useState("");
  const [nft, setNFT] = useState({
    name: "",
    vote: "",
    view: 0,
    isVoted: "",
    image: "",
    status: "",
  });
  const [leftTime, setLeftTime] = useState({
    day: "",
    hour: "",
    min: "",
    second: "",
  });
  const [ip,setIp] = useState('');
  const [preview,setPreview] = useState(false);
  const [share,setShare] = useState(false);


  let delta = 0;

  useEffect(() => {
    getNFT();
    viewNFT();
    getTime();
  }, []);


  const sendEmail = () => {
    if (ValidateEmail(email) == true) {
      const params = { email: email };
      axios.post(`${configJson.SERVER_URL}/email`, params).then((res) => {
        console.log("Successfully saved.");
      });
    } else {
      alert("email is not correct!");
    }
  };

  const viewNFT = () => {
    const params = { nft: nft_id };
    axios.post(`${configJson.SERVER_URL}/nfts/view`, params).then((res) => {
        if(res.status == 200){
          setNFT(prevState=>(
            {...prevState, view: (parseInt(prevState.view)+1)}
            ))
        } 
        console.log("Successfully increase the view count");
    });
  };

  const voteNFT = () => {
    
    const params = { nft: nft_id };
    axios.post(`${configJson.SERVER_URL}/nfts/vote`, params).then((res) => {
      setNFT({...nft, isVoted:!nft.isVoted,vote:(nft.vote+1)});
      toast("Vote!");
    });
  };

  const getNFT = () => {
    axios.get(`${configJson.SERVER_URL}/nfts/nft/${nft_id}`).then((res) => {
      const data = res.data[0];
      setNFT({
        ...nft,
        ["name"]: data.name,
        ["vote"]: data.vote,
        ["view"]: data.view,
        ["image"]: "/collection/"+data.image,
        ["isVoted"]: data.isVoted,
      });
    });
  };

  const getTime = () => {
    axios.get(`${configJson.SERVER_URL}/time`).then((res) => {
      delta = Math.floor(res.data);
      setInterval(change_delta_to_leftTime, 1000);
    });
  };
  
  const change_delta_to_leftTime = () => {
    delta -= 1;
    var date = new Date(delta * 1000);

    setLeftTime({
      ...leftTime,
      ["day"]: date.getDate() - 1,
      ["hour"]: date.getHours(),
      ["min"]: date.getMinutes(),
      ["second"]: date.getSeconds(),
    });
  };

  const handleClose =()=>{
    setPreview(false);
  }
 

  return (
   <>
    {nft.name && (
      <>  
        <HelmetMetaData title={nft?.name}
            description={ nft?.name}
            image={nft?.name}
        ></HelmetMetaData>
      </>
    )}
     
    <div className="collection-item-info">
      <Row className="">
        <Col lg={6} md={12} className="p-0 pb-md-5">
          <div className="collection-item-info-image">
            <img src="/nft/nft1.jpg" />
            <div className="d-flex align-items-center justify-content-center gap-4 mt-4">
              <div onClick={()=>setShare(!share)}>
                <img src="/images/icons/send.png" />
              </div>
               {nft.isVoted ? (
                <div >
                  <img src="/images/icons/heart-fill.png" />
                </div>
               ) :(
                <div  onClick={() => voteNFT()}>
                  <img src="/images/icons/heart-empty.png" />
                </div>
               )} 
              <div onClick={()=>setPreview(true)}>
                <img src="/images/icons/preview.png" />
              </div>
            </div>
            {share && (
              <Share wa={true} tw={true} fb={true} dc={false} item={{url:window.location,text:nft.name }} />
            )}
          </div>
        </Col>
        <Col lg={6} md={12} className="ps-lg-5 ps-md-0">
          <h4>DeStorm Power Exclusive NFTs</h4>
          <h3>{nft.name}</h3>

          <div className="d-flex align-items-center">
            <div className="view-vote-control">
              <img src="/images/icons/view.png" />
              {nft.view}
            </div>
              {nft.isVoted ? (
                 <div className="view-vote-control">
                  <img src="/images/icons/heart-fill.png" />
                  {nft.vote}
                </div>
               ) :(
                <div style={{cursor:"pointer"}} className="view-vote-control" onClick={() => voteNFT()}>
                  <img src="/images/icons/heart-empty.png" />
                  {nft.vote}
                </div>
               )} 
          </div>
          <div className="d-flex align-items-center gap-4 my-5">
            <div lg={6} md={12} className="collection-item-ad">
              <img src="/images/icons/destorm.png" />
              <div>
                <p className="text-by">Owned By</p>
                <p className="by-whom">DeStorm Power</p>
              </div>
            </div>
              <div lg={6} md={12} className="collection-item-ad">
              <a target="_blank" href="https://www.nftbrandsinc.com/" >
                  <img src="/images/icons/symbol.png" />
                  <div>
                    <p className="text-by">Powered By</p>
                    <p className="by-whom">NFT Brandsinc</p>
                  </div>
              </a>
              </div>
          </div>
          <p className="">
            NFTs have proven profitable - and are now a revenue-generating
            resource for millions of artists who have already joined 'the NFT
            stream,' not to mention the space's future possibilities.
          </p>

          <p className="mint-date-text">
            Mint Date: February 24, 2022 at 08:00 AM
          </p>

          <div className="time-countdown d-flex flex-row align-items-start mb-5">
            <div className="time-item d-flex flex-column">
              <time>{leftTime.day}</time>
              <sub>days</sub>
            </div>
            {":"}
            <div className="time-item d-flex flex-column">
              <time>{leftTime.hour}</time>
              <sub>hours</sub>
            </div>
            {":"}
            <div className="time-item d-flex flex-column">
              <time>{leftTime.min}</time>
              <sub>minutes</sub>
            </div>
            {":"}
            <div className="time-item d-flex flex-column">
              <time>{leftTime.second}</time>
              <sub>seconds</sub>
            </div>
          </div>

          <p className="mt-5 ps-5 notify-text">
            Notify me when NFT is available
          </p>
          <div className="email-input">
            <input
              type="email"
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button>
              <img
                src="/images/icons/send-white.png"
                onClick={() => {
                  sendEmail();
                }}
              />
            </button>
          </div>
        </Col>
      </Row>

      <Row className="collection-item-square d-flex flex-row align-items-center my-5">
        <Col lg={6}>
          <div className="">
            <sub>Mint Date</sub>
            <h2>
              24<sup>th</sup>Feb.2022
            </h2>
          </div>
        </Col>
        <Col
          lg={6}
          className="d-flex align-items-center justify-content-between"
        >
          <div>
            <sub>View</sub>
            <h2>{nft.view}</h2>
          </div>
          <div>
            <sub>Favorites</sub>
            <h2>{nft.vote}</h2>
          </div>
        </Col>
      </Row>
      <PreviewItem show={preview} handleClose={handleClose} item={nft}/>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </div>
    </>
  );
};

export default CollectionItemInfo;
