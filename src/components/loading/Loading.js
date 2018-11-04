import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Loading.css';

/* todo aðrar útgáfur af takka fyrir disabled, minni takka fyrir logout og "warning" takka */

export default class Loading extends Component {

  render() {

    return (
      <div className="bullseye">
        <div className="container">
          <div className="dash uno"></div>
          <div className="dash dos"></div>
          <div className="dash tres"></div>
          <div className="dash cuatro"></div>
        </div>
      </div>
    );
  }

}