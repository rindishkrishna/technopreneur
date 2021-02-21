import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../Components/LandingPage/Navbar/Navbar";
import TopSection from "../Components/LandingPage/TopSection/TopSection";
import Sponsors from "../Components/LandingPage/Sponsors/Sponsors";

export function Landingpage(props) {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      </BrowserRouter>
      <TopSection />
      <div id="landingPage">
      <Sponsors />
      </div>
    </div>
  );
}
