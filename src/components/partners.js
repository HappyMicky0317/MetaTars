import React from "react";

import { Row, Col } from "react-bootstrap";
const Partners = () => {
  return (
    <div>
      <Row className="mx-0 partner-control" id="ourpartner">
        <h2 className="text-center mb-5 metal-load"> Our Proud Partners</h2>
        <div className="partner-bottom">
          <div className="partner-item">
            <div className="inner-box">
              <img src="/images/partners/ADam_Waheed.png" />
              <div className="name"><a target="_blank" href="https://www.instagram.com/adamw/?hl=en">ADam Waheed</a> </div>
            </div>
            <div className="inner-box">
              <img src="/images/partners/nft_brands.png" />
              <div className="name"><a target="_blank" href="https://www.nftbrandsinc.com">NFT Brands Inc</a> </div>
            </div>
            {/* <div className="inner-box">
              <img src="/images/partners/King_bach.png" />
              <div className="name"><a target="_blank" href="https://www.instagram.com/kingbach/?hl=en">King Bach</a> </div>
            </div> */}
            <div className="inner-box">
              <img src="/images/partners/The_Zeus_Network.png" />
              <div className="name"><a target="_blank" href="https://www.thezeusnetwork.com">The Zeus Network</a> </div>
            </div>
            <div className="inner-box">
              <img src="/images/partners/Thegr8brand.png" />
              <div className="name"><a target="_blank" href="https://www.instagram.com/thegr8brand/">The gr8 brand</a> </div>
            </div>
          </div>
          {/* <div className="partner-item col-6 col-sm-6 col-md-auto">
           <div> </div>
            <div className="name"><a target="_blank" href="">fsdfsdf</a> </div>
          </div>
          <div className="partner-item col-6 col-sm-6 col-md-auto">
            <img src="/images/partners/imgpsh_fullsize_anim_2.png" />
          </div>
          <div className="partner-item col-6 col-sm-6 col-md-auto">
            <img src="/images/partners/imgpsh_fullsize_anim_3.png" />
          </div>
          <div className="partner-item col-6 col-sm-6 col-md-auto">
            <img src="/images/partners/imgpsh_fullsize_anim_4.png" />
          </div>
          <div className="partner-item col-6 col-sm-6 col-md-auto">
            <img src="/images/partners/imgpsh_fullsize_anim_4.png" />
          </div> */}
        </div>
      </Row>
      <Row className="g-0 mx-0">
        <div className="instr-wrap">
          <div className="instr">
            <div className="instr__wrap">
              <div className="instr__row" style={{ backgroundImage: `url(${"https://cybershibas.com/images/ss1.png"})` }}></div>
            </div>
          </div>
        </div>

        {/* <marquee width="100%" direction="left">
          <div><img src="/arts/repeat10.png" /></div>
          <div className="mt-2"><img src="/arts/repeat20.png" /></div>
        </marquee> */}
        <div className="image-moving">
          <div className="image-contain floor-wrap">
            <div className="floor floor-first" id="#pot" style={{ backgroundImage: `url(${"/arts/nft_1.png"})` }}></div>
            <div className="floor floor-second" style={{ backgroundImage: `url(${"/arts/nft_2.png"})` }}></div>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Partners;
