import React, { Component } from 'react';
import Helmet from 'react-helmet';

import './NotFound.css';

export default class Home extends Component {

  render() {
    return (
      <div className="not-found">
        <Helmet title="Síða fannst ekki" />
        <h1>Síða fannst ekki</h1>
      </div>
    );
  }
}
