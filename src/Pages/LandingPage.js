import React from "react";
import Sponsors from "../Components/LandingPage/Sponsors/Sponsors";
import Events from "../Components/LandingPage/Events/Events";

export function Landingpage(props) {
  return (
    <div id="landingPage">
      <Events />
      <Sponsors />
    </div>
  );
}
