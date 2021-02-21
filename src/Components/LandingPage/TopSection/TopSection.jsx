import React from 'react'
import './TopSection.css';
import logo from '../../../Assets/logo.png';
import rocketImg from '../../../Assets/Saly-1.png';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter }from 'react-icons/fa';
const TopSection = () => {
    return ( 
        <div className="container" id="home"> 
          <div>
            <img src={ logo } className="logo" alt="" />
            <img src={ rocketImg } className="ontop" alt="" />
            <div>
                <h4 className="Date">Date</h4>
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
