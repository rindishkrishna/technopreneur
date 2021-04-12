import React from "react";
import problemImg from "../../../Assets/Frame.png";
import "./Problemstatement.css";

const ProblemStatement = () => {
  return (
    <div className="row container" id="problemstatement">
      <div className="col m8">
        <h3 className="heading">Tracks</h3>
        <div className="problem-content-div">
          <p className="problem-text">
          ⚪ Open Innovation
          <br /><br />
          ⚪ Women Empowerment 
          <br /><br />
          ⚪ Post Pandemic Relief
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
