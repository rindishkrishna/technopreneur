import React from 'react'
import './TopSection.css';
import logo from '../../../Assets/logo.png';
import rocketImg from '../../../Assets/Saly-1.png';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter }from 'react-icons/fa';
const TopSection = () => {
    return ( 
        <div id="home" className="top-container">
            <div className="logo-section">
                <img src= {logo} alt="LOGO" className="logo"/>
            </div>
            <div className="rocket-date">
                <div className="rocket-section">
                    <img src={rocketImg} alt="rocketman" className="rocket-man"/>
                </div>
                <div className="combine">
                    <p className="Date">Date</p>
                    <div className="social_media">
                    <a href="https://www.instagram.com/iedcmec/?hl=en" target="_blank" rel="noopener noreferrer" className="media_page">
                        <FaInstagram/>
                    </a>
                    <a href="https://in.linkedin.com/company/iedcmec" target="_blank" rel="noopener noreferrer" className="media_page">
                        <FaLinkedin />
                    </a>
                    <a href="https://twitter.com/iedc_mec" target="_blank" rel="noopener noreferrer" className="media_page">
                        <FaTwitter />
                    </a>                
                </div>
          </div>
            </div>
        </div>
    )
}

export default TopSection
