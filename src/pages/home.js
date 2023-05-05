import React from "react";
import Footer from "../components/Common/Footer/footer";
import Header from "../components/Common/Header";
import LandingPageComponent from "../components/LandingPage";
// import Popup from "../components/PopUp";

function HomePage() {
  return (
    <div>
      <Header />
      <LandingPageComponent />
      <Footer />
      {/* <Popup /> */}
    </div>
  );
}

export default HomePage;
