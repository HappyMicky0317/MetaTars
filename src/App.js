import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
// Author: NAJI
//import components
import AboutUs from "./components/aboutus";
import Banner from "./components/banner";
import Collection from "./components/collection";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Guide from "./components/guide";
import Header from "./components/header";
import Partners from "./components/partners";
import Roadmap from "./components/roadmap";
import SocialNetwork from "./components/socialnetwork";
import Welcome from "./components/welcome";

//import Pages
import MainPage from "./pages/MainPage";
import CollectionPage from "./pages/CollectionPage";
import CollectionDetailPage from "./pages/CollectionDetailPage";
import HelmetMetaData from "./components/utils/HelmetMetaData";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useParams,
} from "react-router-dom";
import { Provider } from "react-redux";
//store
import store from "./store";
import { useEffect } from "react";
import { toast } from "react-toastify";

function App() {
  // Scroll to top on page change
  const search = useLocation().search;
  console.log(search);
  const moonpayStatus = new URLSearchParams(search).get("transactionStatus");
  if (moonpayStatus == "completed") {
    toast.success("success");
  }
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Provider store={store}>
      <HelmetMetaData></HelmetMetaData>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="/collectable" element={<CollectionPage />} />
            <Route path="/collectable/:id" element={<CollectionDetailPage />} /> */}
      </Routes>
    </Provider>
  );
}

export default App;
