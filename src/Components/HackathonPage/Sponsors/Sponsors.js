import React from "react";
import sponsorImg from "../../../Assets/grey-square.jpg";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <div className="container" id="sponsors">
      <h1 className="heading">Sponsors</h1>
      <div className="row">
        <div className="first">
          <img src={sponsorImg} alt="first "></img>
        </div>
        <div className="second">
          <img src={sponsorImg} alt="second "></img>
        </div>
        <div className="third">
          <img src={sponsorImg} alt="third "></img>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
