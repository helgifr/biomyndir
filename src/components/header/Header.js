import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

/* todo aðrar útgáfur af takka fyrir disabled, minni takka fyrir logout og "warning" takka */

export default class Header extends Component {

  render() {
    return (
      <nav className="nav-bar">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <p className="home-button">Heim</p>
        </Link>
        <Link to="/upcoming" style={{ textDecoration: 'none' }}>
          <p className="upcoming-button">Væntanlegt</p>
        </Link>
      </nav>
    );
  }

}