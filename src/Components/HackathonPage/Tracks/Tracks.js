import React from "react";
import questionImg from "../../../Assets/Question.png";
import "./Tracks.css";

const ProblemStatement = () => {
  return (
    <div className="row container" id="tracks">
      <div className="col m8">
        <h3 className="heading">Tracks</h3>
        <div>
          <p className="track-text">
            ⚪ Post Pandemic Relief
          <br /><br />
          ⚪ Women Empowerment 
          <br /><br />
         ⚪ Open Innovation
         </p>
        </div>
      </div>
      <div className="col m4 track-img-div">
        <img
          src={questionImg}
          className="track-img responsive-img"
          alt="track-vector"
        />
      </div>
    </div>
  );
};

export default ProblemStatement;
