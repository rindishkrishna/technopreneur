import React from "react";
import devfolio from "../../../Assets/Devfolio.png";
import Portis from "../../../Assets/Portis.png";
import Polygon from "../../../Assets/Polygon.png";
import Tezos from "../../../Assets/Tezos.png";
import aws from "../../../Assets/AWSug.png"
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <div className="container" id="sponsors">
      <h1 className="heading">Sponsors</h1>
      <div className="sponsors-row">
        <div className="first-sponsors">
          <img src={devfolio} alt="first " className="sponsor-image"></img>
        </div>
        <div className="second-sponsors">
          <img src={Portis} alt="second " className="sponsor-image"></img>
        </div>
        <div className="third-sponsors">
          <img src={Polygon} alt="third " className="sponsor-image"></img>
        </div>
      </div>
      <div className="sponsors-row-two">
        <div className="fourth-sponsors">
          <img src={Tezos} alt="fourth " className="sponsor-image"></img>
        </div>
        <div className="fifth-sponsors">
          <img src={aws} alt="fifth " className="sponsor-image-aws"></img>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
