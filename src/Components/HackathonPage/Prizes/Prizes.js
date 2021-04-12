import React from "react";
import portis from "../../../Assets/Portis.png";
import polygon from "../../../Assets/Polygon.png";
import tezos from "../../../Assets/Tezos.png";
import "./Prizes.css";

const Prizes = () => {
  return (
    <div className="container prize-container" id="prizes">
      <h3 className="heading">Prizes</h3>

      <div className="row">
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

        <div className="col m4 prize-div ">
          <img src={polygon} className="prize-img" alt="third prize" />
          <h3>10,000 ₹</h3>
          <br></br>
          <h5>Best Hack built on Polygon</h5>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
