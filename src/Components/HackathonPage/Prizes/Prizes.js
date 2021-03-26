import React from "react";
import firstPrizeImg from "../../../Assets/Frame-1.png";
import secondPrizeImg from "../../../Assets/Frame-2.png";
import thirdPrizeImg from "../../../Assets/Frame-3.png";
import "./Prizes.css";

const Prizes = () => {
  return (
    <div className="container prize-container" id="prizes">
      <h3 className="heading">Prizes</h3>
      <div className="col m4 prize-div">
          {/* <h2 >Prizes Worth </h2>
          <h3>3 Lakhs</h3> */}
          <img src={firstPrizeImg} className="prize-img" alt="first prize" />
          <h3>7000 ₹</h3>
          </div>
      <div className="row">
        <div className="col m4 prize-div ">
          <img src={secondPrizeImg} className="prize-img" alt="second prize" />
          <h3>5000 ₹</h3>
        </div>
        
        <div className="col m4 prize-div ">
          <img src={thirdPrizeImg} className="prize-img" alt="third prize" />
          <h3>2000 ₹</h3>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
