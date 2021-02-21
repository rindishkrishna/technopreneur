import React from 'react';
import "./About.css";
import vector from '../../../Assets/Saly-15.png'
import downWave from '../../../Assets/Vector-3.png'
import upWave from '../../../Assets/Vector-2.png'
import topVector from '../../../Assets/Saly-13.png'
import meet from '../../../Assets/meeting.jpeg'

export default function AboutComponent(props){
    return(
        <div>
        <div className="top-section">
            <img src={upWave} className="wave-d" alt="waveup"/>
            <div className="outerTop">
                <div className="topRow">
                        <div className="meet-outer">
                            <img src={meet} className="meet" alt="about vector"/>
                        </div>
                        <div className="vector-top">
                            <button name="Register" className = "register-btn">Register</button>
                        </div>
                        <div className="vector-top">
                            <img src={topVector} className="topVector" alt="about vector"/>
                        </div>
                </div>
            </div>
        </div>
        <div className = "col container">
            <div className="headerContent">
                <p className="header">
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
            <img src={downWave} className="wave-d" alt="wavedown"/>
        </div>
    )
}
