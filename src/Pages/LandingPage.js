import React from "react";
import TopSection from "../Components/LandingPage/TopSection/TopSection";
import Sponsors from "../Components/LandingPage/Sponsors/Sponsors";
import Events from "../Components/LandingPage/Events/Events";

import AboutComponent from "../Components/LandingPage/About/About";
import ContactUs from "../Components/LandingPage/ContactUs/ContactUs"

export function Landingpage(props) {
  return (
    <div>
    <div>
        <TopSection />
      </div>      
      <AboutComponent/>
      <div id="landingPage">
        <Events />
        <Sponsors />
        <ContactUs/>
      </div>
    </div>
  );
}
