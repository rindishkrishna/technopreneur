import React from 'react';
import "./About.css";
import vector from '../../../Assets/Saly-15.png'
import downWave from '../../../Assets/Vector-3.png'
import upWave from '../../../Assets/Vector-2.png'

export default function AboutComponent(props){
    return(
        <div>
        <img src={upWave} className="wave-d"/>
        <div className = "row container">
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
            <img src={downWave} className="wave-d"/>
        </div>
    )
}
