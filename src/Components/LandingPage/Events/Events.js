import React from "react";
import eventImg from "../../../Assets/grey-square.jpg";
import tick from "../../../Assets/Saly-10.png";
import "./Events.css";

const Events = () => {
  return (
    <div className="eve-container" id="events">
      <div className="eve-heading">
        <p className="headings eve-head">EVENTS</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom:"10%"
        }}
      >
        <div className="event">
          <img src={eventImg} alt="" className="eventImage"></img>

          <div className="eventButton">
            <button className="button button1">Register</button>
          </div>
        </div>
        <div className="event">
          <img src={eventImg} alt="" className="eventImage"></img>
          <div className="eventButton">
            <button className="button button1">Register</button>
          </div>
        </div>

        <div className="event">
          <img src={eventImg} alt="" className="eventImage"></img>
          <div className="eventButton">
            <button className="button button1">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
