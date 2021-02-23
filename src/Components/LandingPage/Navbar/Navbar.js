import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import './Navbar.css';
export const Navbar = () => {
    return ( 
        <nav className="navbar">
          <ul className="nav-item">
            <li>
              <Link to="/#home" smooth={true} spy={true} duration={1000}
              className="av-link">
                Home
                </Link>
            </li>
            <li>
              <Link to="/#about" smooth={true} spy={true} duration={1000}
              className="av-link">
                About Us
                </Link>
            </li>
            <li>
              <Link to="/#events" smooth={true} spy={true} duration={1000}
              className="av-link">
                Events
                </Link>
            </li>
            <li>
              <Link to="/#sponsors" smooth={true} spy={true} duration={1000}
              className="av-link">
                Sponsors
                </Link>
            </li>
          </ul>
        </nav>
    )
}

