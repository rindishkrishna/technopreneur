import React from "react";
import sponsorImg from "../../../Assets/grey-square.jpg";
import tick from "../../../Assets/Saly-26.png";
import downWave from '../../../Assets/Vector-3.png'
import upWave from '../../../Assets/Vector-2.png'
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <div className="container" id="sponsors">
      <div className="tick">
        <img src={tick} alt="" height="100px" width="100px"></img>
      </div>
      <div className="content">
        <h3 className="sponsor-heading">Sponsors</h3>
        <div className="row">
          <div id="first">
            <img src={sponsorImg} alt="first "></img>
          </div>
          <div id="second">
            <img src={sponsorImg} alt="second "></img>
          </div>
          <div id="third">
            <img src={sponsorImg} alt="third "></img>
          </div>
          <div id="fourth">
            <img src={sponsorImg} alt="fourth "></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
