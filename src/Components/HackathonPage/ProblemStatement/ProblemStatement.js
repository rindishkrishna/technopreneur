import React from "react";
import problemImg from "../../../Assets/Frame.png";
import "./Problemstatement.css";

const ProblemStatement = () => {
  return (
    <div className="row container" id="problemstatement">
      <div className="col m8">
        <h3 className="problem-heading">Problem Statement</h3>
        <div className="problem-content-div">
          <p className="problem-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
      <div className="col m4 problem-img-div">
        <img
          src={problemImg}
          className="problem-img responsive-img"
          alt="problem-vector"
        />
      </div>
    </div>
  );
};

export default ProblemStatement;
