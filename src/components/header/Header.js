import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const basename = process.env.PUBLIC_URL || '';

export default class Header extends Component {

  render() {
    return (
      <nav className="nav-bar">
        <Link className="home-button" to="/" style={{ textDecoration: 'none' }}>
          <img src={`${basename}/Home.png`} alt="Home Icon" />
        </Link>
        <Link to="/upcoming" style={{ textDecoration: 'none' }}>
          <p className="upcoming-button">Væntanlegt</p>
        </Link>
      </nav>
    );
  }

}