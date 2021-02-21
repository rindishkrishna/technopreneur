import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../Components/LandingPage/Navbar/Navbar";
import TopSection from "../Components/LandingPage/TopSection/TopSection";
import Sponsors from "../Components/LandingPage/Sponsors/Sponsors";
import Events from "../Components/LandingPage/Events/Events";
import AboutComponent from "../Components/LandingPage/About/About";

export function Landingpage(props) {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <TopSection />
      <AboutComponent/>
      <div id="landingPage">
        <Events />
        <Sponsors />
      </div>
    </div>
  );
}
