import React from 'react';
import organiserImg from '../../../Assets/Organizing projects-cuate 1.png';
import logo from '../../../Assets/technohacklogo.png';
import './TopSection.css';

const TopSection = () => {
  return (
    <div className="row container" id="home">
      <div className="col m8">
        <h3 className="top-heading">
          <img src={ logo } className="hacklogo" />
        </h3>
        <div className="content-div">
          <p className="text">
            <strong> TechnoHack </strong> is a nation-wide hackathon conducted 
            as a part of <strong> IEDC MEC's Technopreneur </strong> event. 
            TechnoHack invites all geeks and entrepreneurs to come up with
            solutions to problems of today.
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
