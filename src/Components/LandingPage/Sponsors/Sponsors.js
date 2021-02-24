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
    <div className="top-section">
      <img src={upWave} className="wave-d" alt="waveup"/>
    </div>
    
    <div className="sponsor-container" id="sponsors">
    <div className="tick">
        <img
          src={tick}
          alt=""
          className="spo-image"
        ></img>
      </div>
      <p style={{ textAlign: "center", marginBottom: "3rem" }} className="eve-heading">Sponsors</p>
      <div className="content">
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
    <img src={upWaves} className="wave-d" alt="wavedown"/>
    </div>
  );
};

export default Sponsors;
