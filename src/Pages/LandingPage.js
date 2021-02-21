import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../Components/LandingPage/Navbar/Navbar";
import Sponsors from "../Components/LandingPage/Sponsors/Sponsors";

export function Landingpage(props) {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      </BrowserRouter>
      <div id="landingPage">
      <Sponsors />
      </div>
    </div>
  );
}
