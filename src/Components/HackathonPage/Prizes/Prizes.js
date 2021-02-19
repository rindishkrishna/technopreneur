import React from "react";
import firstPrizeImg from "../../../Assets/Frame-1.png";
import secondPrizeImg from "../../../Assets/Frame-2.png";
import thirdPrizeImg from "../../../Assets/Frame-3.png";
import "./Prizes.css";

const Prizes = () => {
    return (
        <div className="container prize-container" >
            <h3 className="prize-heading">Prizes</h3>
            <div className="row">
                <div className="col m4 prize-div offset">
                    <img src={secondPrizeImg} className="prize-img" alt="second prize" />
                </div>
                <div className="col m4 prize-div">
                    <img src={firstPrizeImg} className="prize-img" alt="first prize" />
                </div>
                <div className="col m4 prize-div offset">
                    <img src={thirdPrizeImg} className="prize-img" alt="third prize" />
                </div>
            </div>
        </div>
    );
};

export default Prizes;
