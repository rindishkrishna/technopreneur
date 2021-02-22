import React from "react";
import "./ContactUs.css";
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter }from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contact-container" id="contactUs">
      <div className="cu-contents">
          <div>
            <p className="heading">Contact Us</p>
          </div>
          <div>
            <div style={{"padding-bottom":"20px"}}>
                <p className="heading">Follow Us</p>
            </div>
            <div>
            <div className="social_links">
                <a href="https://www.instagram.com/iedcmec/?hl=en" target="_blank" rel="noopener noreferrer" className="media_link">
                    <FaInstagram/>
                </a>
                <a href="https://in.linkedin.com/company/iedcmec" target="_blank" rel="noopener noreferrer" className="media_link">
                    <FaLinkedin />
                </a>
                <a href="https://twitter.com/iedc_mec" target="_blank" rel="noopener noreferrer" className="media_link">
                    <FaTwitter />
                </a>                
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ContactUs;
