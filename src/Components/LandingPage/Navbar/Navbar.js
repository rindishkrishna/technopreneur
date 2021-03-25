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
                HOME
                </Link>
            </li>
            <li>
              <Link to="/#about" smooth={true} spy={true} duration={1000}
              className="av-link">
                ABOUT US
                </Link>
            </li>
            <li>
              <Link to="/#events" smooth={true} spy={true} duration={1000}
              className="av-link">
                EVENTS
                </Link>
            </li>
            <li>
              <Link to="/#sponsors" smooth={true} spy={true} duration={1000}
              className="av-link">
                SPONSORS
                </Link>
            </li>
          </ul>
        </nav>
    )
}

