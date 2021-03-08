import React from 'react';
import "./About.css";
import upWaves from '../../../Assets/Events-Wave.png'

export default function AboutComponent(props){
    return(
        <div className="about">
        <div className = "col about-container">
            
            <div className="main-section">
            <div className="headerContent">
                <p className="headings header">
                    ABOUT US
                </p>
            </div>
            <div className="aboutContent">
                <div className="aboutText">
                    <p className="textStyle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla id pellentesque id eros mi tristique iaculis. Blandit eget est id mauris, etiam pretium. Eu ipsum, enim senectus id metus nulla pellentesque elementum. Morbi vitae porta id cum commodo varius.
<br/><br/>
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
