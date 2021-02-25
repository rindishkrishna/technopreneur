import React from 'react';
import "./About.css";
import vector from '../../../Assets/Saly-15.png'
import downWave from '../../../Assets/Vector-3.png'
import upWave from '../../../Assets/Vector-2-long.png'
import upWaves from '../../../Assets/Group-5.png'
import topVector from '../../../Assets/Saly-13.png'
import meet from '../../../Assets/meeting.jpeg'

export default function AboutComponent(props){
    return(
        <div className="about">
        <div className="top-section" id="about">
            <img src={upWave} className="wave-d" alt="waveup"/>
        </div>
        <div className = "col about-container">
            <div className="top-row">
                <img src={meet} className="meet-img" alt="meet"/>
                <button className="about-button1 about-button">Register</button>
                <img src={topVector} className="top-vector" alt="top-vector" />
            </div>
            <div className="main-section">
            <div className="headerContent">
                <p className="headings header">
                    About Us
                </p>
            </div>
            <div className="aboutContent">
                <div className="aboutVector">
                    <img src={vector} className="vector" alt="about vector"/>
                </div>
                <div className="aboutText">
                    <p className="textStyle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla id pellentesque id eros mi tristique iaculis. Blandit eget est id mauris, etiam pretium. Eu ipsum, enim senectus id metus nulla pellentesque elementum. Morbi vitae porta id cum commodo varius.
                    </p>
                </div>
                
            </div>
            </div>
            </div>
            <img src={upWaves} className="wave-d" alt="wavedown"/>
        </div>
    )
}
