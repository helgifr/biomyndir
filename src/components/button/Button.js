import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Button.css';

/* todo aðrar útgáfur af takka fyrir disabled, minni takka fyrir logout og "warning" takka */

export default class Button extends Component {

  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
  }

  static defaultProps = {
    className: '',
    onClick: () => {},
  }

  render() {
    const { children, onClick, type, pushed } = this.props;

    let classes = `button ${type}`
    if (pushed) classes += ' pushed';

    return (
      <button onClick={onClick} className={classes}>{children}</button>
    );
  }

}

