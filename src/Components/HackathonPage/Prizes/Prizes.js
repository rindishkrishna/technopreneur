import React from "react";
import portis from "../../../Assets/Portis.png";
import polygon from "../../../Assets/Polygon.png";
import tezos from "../../../Assets/Tezos.png";
import aws from '../../../Assets/AWSug.png'
import "./Prizes.css";

const Prizes = () => {
  return (
    <div className="container prize-container" id="prizes">
      <h3 className="heading">Prizes</h3>

      <div className="row prize-row">
        <div className="col m4 prize-div">
          <img src={tezos} className="prize-img" alt="first prize" />
          <h3>20,000 ₹</h3>
          <br></br>
          <h5>Best Hack built on Tezos</h5>
        </div>
        <div className="col m4 prize-div ">
          <img src={portis} className="prize-img" alt="second prize" />
          <h3>15,000 ₹</h3>
          <br></br>
          <h5>Best Hack built on Portis</h5>
        </div>
      </div>
      <div className="row prize-row">
        <div className="col m4 prize-div">
          <img src={polygon} className="prize-img-polygon" alt="third prize" />
          <h3>10,000 ₹</h3>
          <br></br>
          <h5>Best Hack built on Polygon</h5>
        </div>
        <div className="col m4 prize-div">
          <img src={aws} className="prize-img-aws" alt="second prize" />
          <br></br>
          <h5>20$ AWS credit for every participant</h5>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
