import React from 'react';
import organiserImg from '../../../Assets/Organizing projects-cuate 1.png';
import './TopSection.css';

const TopSection = () => {
  return (
    <div className="row container" id="home">
      <div className="col m8">
        <h3 className="heading top-heading">HACKATHON</h3>
        <div className="content-div">
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div>
            <button className="btn">Register Here</button>
          </div>
        </div>
      </div>
      <div className="col m4 img-div">
        <img
          src={organiserImg}
          className="top-img responsive-img"
          alt=""
        />
      </div>
    </div>
  )
}
export default TopSection
