import React, { Component } from 'react';

import Button from '../button';

import './Movies.css';

/* todo aðrar útgáfur af takka fyrir disabled, minni takka fyrir logout og "warning" takka */

export default class Movies extends Component {

  render() {
    const { movie } = this.props;
    const { title, poster, ratings } = movie;
    return (
      <figure className="movieSpace">
        <img src={poster} alt={"Mynd fyrir bíómyndina " + title}/>
        <p>{title}</p>
        <p>{ratings.imdb}<img className="logo" src="/imdb.png" alt="imdb logo" /></p>
      </figure>
    );
  }

}