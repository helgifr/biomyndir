import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { getMovies } from '../../actions/movies';

import Button from '../../components/button';

import './MoviePage.css';

class MoviePage extends Component {

  componentDidMount() {
    const movies = window.localStorage.getItem("movies");
    if (!movies || movies.timestamp < new Date().getTime()) {
      const { dispatch } = this.props;
      dispatch(getMovies());
    }
  }

  componentDidUpdate() {

  }

  cinemaButton(index) {
    const { cinemas } = this.state;
    cinemas[index].pushed = !cinemas[index].pushed;
    this.sortMovies(cinemas);
  }

  render() {
    const { message, isFetching, movies } = this.props;

    if (isFetching) return (<p>sæki mynd...</p>);

    const { match } = this.props;
    const { id } = match.params;

    const movie = movies.filter(movie => movie.id === parseInt(id));

    const {
      title,
      poster,
      ratings,
      ids,
      plot,
    } = movie[0];
    const { imdb } = ratings;
    console.log(movie[0]);
    

    return (
      <div className="movie-page">
        <img src={poster} alt={"mynd fyrir bíómyndina " + title} />
        <p>{title}</p>
        <div className="rating">
            <p>{imdb}</p>
            <a href={"https://www.imdb.com/title/tt" + ids.imdb}>
              <img className="logo" src="/imdb.png" alt="imdb logo" />
            </a>
          </div>
        <p>{plot}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    isFetching: state.movies.isFetching,
  }
}
export default withRouter(connect(mapStateToProps)(MoviePage));