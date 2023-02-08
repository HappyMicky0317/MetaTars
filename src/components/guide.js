import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

const Guide = () => {
  const [guides, setGuides] = useState([
    {
      step: "01",
      icon: "wallet.png",
      title: "Connect or Create your crypto Wallet",
      description:
        "You can connect your existing crypto wallet or metamask wallet or create a new crypto wallet with us in simple few steps on mint date.",
    },
    {
      step: "02",
      icon: "buy.png",
      title: " Click Mint",
      description:
        "After you connect or create your wallet, you'll need to mint NFT. You can only mint NFTs on the mint date and can mint up to 5 NFTs altogether.",
    },
    {
      step: "03",
      icon: "nft.png",
      title: "Add the contact address",
      description:
        "It's time to fill up the import new token box with your wallet information so that you can mint NFT or pay with a credit card in a few simple steps and have them shipped to your specified address.",
    },
    {
      step: "04",
      icon: "purchase-order.png",
      title: "View your NFT on opensea",
      description:
        "After minting your NFT and entering your contact information, you'll need to view it on opensea for more information.",
    },

  ]);
  return (
    <div className="container">

      <h3 className="mb-5 metal-load buy-metatars">
         How to buy METATARS ?
      </h3>

      <Row className="">
        <div className="d-flex align-items-stretch justify-content-center flex-wrap">
          {guides.map((item, index) => {
            return (
              <div className="guide-item" key={index}>
                <div className="guide-content">
                  <sub>STEP - {item.step}</sub>
                  <h6 className="mt-4 mb-3  ">{item.title}</h6>
                  <p>{item.description}</p>
                </div>
                <div className="guide-item-icon">
                  <img src={"/images/icons/" + item.icon} />
                </div>
              </div>
            );
          })}
        </div>
      </Row>
    </div>
  );
};

export default Guide;
