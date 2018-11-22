import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import { getMovies } from '../../actions/movies';
import { getUpcomingMovies } from '../../actions/upcomingMovies';
import { getStoredMovies, getStoredUpcomingMovies } from '../../storedMovies';

import Loading from '../../components/loading';
import Showtimes from '../../components/showtimes';

import { months, listDirectors } from '../../utils';

import './MoviePage.css';

const basename = process.env.PUBLIC_URL || '';

class MoviePage extends Component {

  state = {
    movies: null,
    upcomingMovies: null,
    doneMovies: false,
    doneUpcoming: false,
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    const movies = await getStoredMovies();
    const upcomingMovies = await getStoredUpcomingMovies();
    if (movies) {
      this.setState({ movies, doneMovies: true });
    } else {
      dispatch(getMovies());
    }
    if (upcomingMovies) {
      this.setState({ upcomingMovies, doneUpcoming: true });
    } else {
      dispatch(getUpcomingMovies());
    }
  }

  componentDidUpdate() {
    const { isFetching, isFetchingUpcoming, movies, upcomingMovies, message } = this.props;
    const { doneMovies, doneUpcoming } = this.state;

    if (!isFetching || !isFetchingUpcoming) {
      if (movies && !doneMovies) {
        this.setState({ movies, doneMovies: true });
      } else if (upcomingMovies && !doneUpcoming) {
        this.setState({ upcomingMovies, doneUpcoming: true });
      } else if (message) {
        console.error(message);
      }
    } else {
      console.info('Fetching movies');
    }
  }

  render() {
    const { message, isFetching, isFetchingUpcoming } = this.props;
    const { movies, upcomingMovies } = this.state;

    if (message) return (<p>{message}</p>);

    if (isFetching || isFetchingUpcoming || !movies || !upcomingMovies) return (<Loading />);

    const { match } = this.props;
    const { id } = match.params;

    // Finna mynd og vita hvort hún sé væntanleg eða ekki
    let movie = movies.filter(movie => movie.id === parseInt(id));

    let isUpcoming = false;
    if (movie.length === 0) {
      movie = upcomingMovies.filter(movie => movie.id === parseInt(id));
      isUpcoming = true;
    }

    if (movie.length === 0) return (<h2 className="movie-notfound">Mynd fannst ekki</h2>);

    const {
      title,
      poster,
      ratings,
      ids,
      plot,
      showtimes,
      directors_abridged,
      trailers,
    } = movie[0];

    let ratingSection, dateSection;
    if (isUpcoming) { // Ef að mynd er væntanleg þá er birt útgáfudagur
      const date = new Date(movie[0]['release-dateIS']);
      const dateString = `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
      dateSection = (
        <h2 className="movie-page_release-date">{dateString}</h2>
      );
    } else { // Annars er birt imdb einkunnin
      const { imdb } = ratings;
      ratingSection = (
        <div className="movie-page-rating">
          <p>{imdb}</p>
          <a href={"https://www.imdb.com/title/tt" + ids.imdb}>
            <img className="logo" src={`${basename}/imdb.png`} alt="imdb logo" />
          </a>
        </div>
      );
    }

    const { results } = trailers[0];
    let trailerPlaylist = "";
    results.forEach(result => trailerPlaylist += "," + result.key);

    const directors = listDirectors(directors_abridged);

    return (
      <div className="movie-page">
        <Helmet title={title} />
        <div className="movie-about">
          <img src={poster} alt={"mynd fyrir bíómyndina " + title} />
          <div className="movie-info">
            {dateSection}
            <h1 className="movie-title">{title}</h1>
            {ratingSection}
            <p>{directors}</p>
            <p className="plot-text">{plot}</p>
          </div>
        </div>
        {results.length > 0 &&
          <div className="youtubevideowrap">
            <div className="video-container">
              <iframe
                title="trailers"
                width="640"
                height="352"
                align="center"
                src={`https://www.youtube.com/embed/?playlist=${trailerPlaylist}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen>
              </iframe>
            </div>
          </div>
        }
        <Showtimes showtimes={showtimes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    upcomingMovies: state.upcomingMovies.upcomingMovies,
    isFetchingUpcoming: state.upcomingMovies.isFetchingUpcoming,
    movies: state.movies.movies,
    isFetching: state.movies.isFetching,
    message: state.movies.message,
  }
}
export default withRouter(connect(mapStateToProps)(MoviePage));