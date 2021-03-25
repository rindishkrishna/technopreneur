import React from "react";
import sponsorImg from "../../../Assets/grey-square.jpg";
import tick from "../../../Assets/Saly-26.png";
import downWave from '../../../Assets/Vector-3.png'
import upWave from '../../../Assets/Vector-2.png'
import upWaves from '../../../Assets/Group-5.png'
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <div>
    
    <div className="sponsor-container" id="sponsors">
    
      <p className="headings">OUR <br/> PARTNERS</p>
      <div className="content">
        <div className="row">
          <div id="first">
            <img src={sponsorImg} alt="first " className="placeholder"></img>
          </div>
          <div id="second">
            <img src={sponsorImg} alt="second " className="placeholder"></img>
          </div>
          <div id="third">
            <img src={sponsorImg} alt="third " className="placeholder"></img>
          </div>
          <div id="fourth">
            <img src={sponsorImg} alt="fourth " className="placeholder"></img>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sponsors;
