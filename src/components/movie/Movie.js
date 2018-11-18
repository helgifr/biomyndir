import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { months } from '../../utils';

import './Movie.css';

const basename = process.env.PUBLIC_URL || '';

export default class Movie extends Component {

  rating() {
    const { upcoming, movie } = this.props;
    const { ratings } = movie;
    if (!upcoming) {
      return (
        <div className="rating">
          <p>{ratings.imdb}</p>
          <img className="logo" src={`${basename}/imdb.png`} alt="imdb logo" />
        </div>
      );
    } else {
      const { date } = movie;
      const month = months[date.getMonth()];
      const dateString = `${date.getDate()}. ${month} ${date.getFullYear()}`;
      return (
        <p className="release-date">{dateString}</p>
      );
    }
  }

  render() {
    const { movie } = this.props;
    const { title, id } = movie;
    const rating = this.rating();
    // Passa uppá ef það vantar mynd
    let { poster } = movie;
    poster = poster === 'https://kvikmyndir.is/images/poster/' ? `${basename}/noPoster.png` : poster;

    return (
      <figure className="movieSpace">
        <Link to={ "/movie/" + id} style={{ textDecoration: 'none' }}>
          <img src={poster} alt={"Mynd fyrir bíómyndina " + title}/>
          <figcaption>
            <p className="title">{title}</p>
            {rating}
          </figcaption>
        </Link>
      </figure>
    );
  }

}