import React from "react";
import devfolio from "../../../Assets/Devfolio.png";
import Portis from "../../../Assets/Portis.png";
import Polygon from "../../../Assets/Polygon.png";
import Tezos from "../../../Assets/Tezos.png";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <div className="container" id="sponsors">
      <h1 className="heading">Sponsors</h1>
      <div className="row sponsors-row">
        <div className="first">
          <img src={devfolio} alt="first "></img>
        </div>
        <div className="second">
          <img src={Portis} alt="second "></img>
        </div>
        <div className="third">
          <img src={Polygon} alt="third "></img>
        </div>
        <div className="third">
          <img src={Tezos} alt="third "></img>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
