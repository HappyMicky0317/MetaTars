import React from "react";

const Footer = () => {
  return <div className="d-flex flex-column justify-content-center align-items-center p-4">
    <div className="logo-image"><img height={'70px'} src="/images/logo.gif" alt="" /> <span className="logo-text"> MetaTars </span></div>
    <p className="pt-3 footer-text">2022, All Rights Reserved @ MetaTars Powered by  <a target="_blank" href="https://www.nftbrandsinc.com/" >NFT Brands Inc.</a></p>
  </div>;
};

export default Footer;
