import React from "react";
import { ToastContainer } from "react-toastify";

//import Components
import AboutUs from "../components/aboutus";
import Banner from "../components/banner";
import Collection from "../components/collection";
import Faq from "../components/faq";
import Guide from "../components/guide";
import Partners from "../components/partners";
import Roadmap from "../components/roadmap";
import Giveaways from "../components/givaways";
import SocialNetwork from "../components/socialnetwork";
import Welcome from "../components/welcome";
import Mint from "../components/mint";
const MainPage = () => {
  return (
    <div>
      <Banner />
      <Mint />
      <AboutUs />
      <Giveaways/>
      <Welcome />
      <Guide />
      <Collection />
      <Roadmap />
      <Partners />
      <Faq />
      <SocialNetwork />
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
  );
};

export default MainPage;
