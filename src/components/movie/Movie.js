import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Movie.css';

const basename = process.env.PUBLIC_URL || '';

export default class Movie extends Component {

  render() {
    const { movie } = this.props;
    const { title, poster, ratings, id } = movie;

    return (
      <figure className="movieSpace">
        <Link to={ "/movie/" + id} style={{ textDecoration: 'none' }}>
          <img src={poster} alt={"Mynd fyrir bíómyndina " + title}/>
          <figcaption>{title}</figcaption>
          <div className="rating">
            <p>{ratings.imdb}</p>
            <img className="logo" src={`${basename}/imdb.png`} alt="imdb logo" />
          </div>
        </Link>
      </figure>
    );
  }

}