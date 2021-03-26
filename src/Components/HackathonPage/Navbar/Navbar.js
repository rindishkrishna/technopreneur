import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className="space">
        <nav className="nav">
          <ul className="navbar-item">
            <li>
              <Link to="hackathon/#home" smooth={true} spy={true} duration={1000}
              className="nav-link">
                Home
                </Link>
            </li>
            <li>
              <Link to="hackathon/#problemstatement" smooth={true} spy={true} duration={1000}
              className="nav-link">
                Problem Statement
                </Link>
            </li>
            <li>
              <Link to="hackathon/#prizes" smooth={true} spy={true} duration={1000}
              className="nav-link">
                Prizes
                </Link>
            </li>
            <li>
              <Link to="hackathon/#faq" smooth={true} spy={true} duration={1000}
              className="nav-link">
                FAQ
                </Link>
            </li>
            <li>
            <Link to="hackathon/#sponsors" smooth={true} spy={true} duration={1000}
              className="nav-link">
                Sponsors
                </Link>
            </li>
          </ul>
        </nav>
        </div>
  )
}
