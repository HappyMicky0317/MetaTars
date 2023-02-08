import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./footer";
import axios from "axios";
import configJson from "../config/default.json";

const CollectionItemDetail = () => {
  const params = useParams();
  const nft_id = params.id;

  const [nft, setNFT] = useState({
    clothes: "",
    eyes: "",
    hair: "",
    background: "",
    name: "",
  });

  const getNFT = () => {
    // console.log(nft_id);
    axios.get(`${configJson.SERVER_URL}/nfts/nft/${nft_id}`).then((res) => {
      const data = res.data[0];
      setNFT({
        ...nft,
        ["name"]: data.name,
        ["clothes"]: data.clothes,
        ["eyes"]: data.eyes,
        ["hair"]: data.hair,
        ["background"]: data.background,
      });
    });
  };

  useEffect(() => {
    getNFT();
  }, []);

  return (
    <div className="collection-item-detail">
      <h2 className="pb-5">NFT Details</h2>
      <hr style={{ height: "2px", color: "rgba(255, 255, 255, 0.16)" }}></hr>
      <main className="">
        <header className="pb-5">
          Properties<sup>(5)</sup>
        </header>
        <div className="property-control">
          <div className="property-item">
            <div className="property-image">
              <img src="/images/icons/tshirt.png" />
            </div>
            <div className="property-info">
              <p>Costume</p>
              <sub>{nft.clothes}</sub>
            </div>
          </div>
          <div className="property-item">
            <div className="property-image">
              <img src="/images/icons/artstation.png" />
            </div>
            <div className="property-info">
              <p>Art Type</p>
              <sub>Social</sub>
            </div>
          </div>
          <div className="property-item">
            <div className="property-image">
              <img src="/images/icons/eye.png" />
            </div>
            <div className="property-info">
              <p>Eye Color</p>
              <sub>{nft.eyes}</sub>
            </div>
          </div>
          <div className="property-item">
            <div className="property-image">
              <img src="/images/icons/image.png" />
            </div>
            <div className="property-info">
              <p>Background</p>
              <sub>{nft.background}</sub>
            </div>
          </div>
          <div className="property-item">
            <div className="property-image">
              <img src="/images/icons/meatball.png" />
            </div>
            <div className="property-info">
              <p>Hair</p>
              <sub>{nft.hair}</sub>
            </div>
          </div>
        </div>
      </main>
      <main className="">
        <header className="pb-5">
          Chain Attributes<sup>(5)</sup>
        </header>
        <div className="attribute-control">
          <div className="attribute-item">#{nft.name.split("#")[1]}</div>
          <div className="attribute-item">NFT</div>
          <div className="attribute-item">Polygon</div>
          <div className="attribute-complex-item">
            <div className="attribute-item">MetaData</div>
            <div className="attribute-content">IPFS</div>
          </div>
          <div className="attribute-complex-item">
            <div className="attribute-item">Contract Address</div>
            <div className="attribute-content">0x1230234...323</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CollectionItemDetail;
