import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
//import components
import SocialItem from "./utils/socialitem";
import Footer from "./footer";
const SocialNetwork = () => {
  const [socialLists, setSocialLists] = useState([
    {
      id: 1,
      name: "discord",
      icon: "discord.png",
      link: "https://discord.com/invite/paHAFY2pXc",

    },
    {
      id: 2,
      name: "facebook",
      icon: "facebook.png",
      link: "https://www.facebook.com/DeStormPower",
    },
    {
      id: 3,
      name: "instagram",
      icon: "instagram.png",
      link: "https://www.instagram.com/destorm/?hl=en",
    },
    {
      id: 4,
      name: "twitter",
      icon: "twitter.png",
      link: "https://twitter.com/destorm?lang=en",
    },
  ]);
  return (
    <Row className="social-control mx-0">
      <h3 className="text-center mb-5 metal-load">FOLLOW US </h3>
      <div className="social-lists d-flex align-items-stretch justify-content-center flex-wrap gap-5 my-5">
        {socialLists.map((item, index) => {
          return <SocialItem link={item.link} name={item.name} icon={item.icon} key={index} />;
        })}
      </div>
      <Footer />
    </Row>
  );
};

export default SocialNetwork;
