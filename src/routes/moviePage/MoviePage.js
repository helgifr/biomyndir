import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import { getMovies } from '../../actions/movies';
import { getUpcomingMovies } from '../../actions/upcomingMovies';
import { getStoredMovies, getStoredUpcomingMovies } from '../../storedMovies';

import Button from '../../components/button';
import Loading from '../../components/loading';

import { months } from '../../utils';

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
    const { isFetching, movies, upcomingMovies, message } = this.props;
    const { doneMovies, doneUpcoming } = this.state;

    if (!isFetching && !doneMovies && !doneUpcoming) {
      if (movies && upcomingMovies) {
        this.setState({ movies, upcomingMovies, doneMovies: true, doneUpcoming: true });
      } else {
        console.warn(message);
      }
    } else if (isFetching) {
      console.info('Fetching movies');
    }
  }

  renderUpcomingMovie(movie) {
    const {
      title,
      plot,
      directors_abridged,
      trailers,
    } = movie;

    const { results } = trailers[0];

    let trailerPlaylist = "";
    results.forEach(result => trailerPlaylist += "," + result.key);

    const date = new Date(movie['release-dateIS']);
    const dateString = `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;

    let { poster } = movie;
    if (poster === 'https://kvikmyndir.is/images/poster/') {
      poster = `${basename}/noPoster.png`;
    }

    /* Notað til að bæta kommu milli leikstjóra ef þeir eru
       fleiri en einn, 'og' síðan sett fyrir seinasta leikstjóran */
    let directors = `Leikstjóri: ${directors_abridged[0].name}`;
    if (directors_abridged.length > 1) {
      directors = 'Leikstjórar: ' + directors_abridged[0].name;
      for (let i = 1; i < directors_abridged.length; i++) {
        if (i === directors_abridged.length-1) {
          directors += ` og ${directors_abridged[i].name}`;
        } else {
          directors += `, ${directors_abridged[i].name}`;
        }
      }
    }

    return (
      <div className="movie-page">
        <Helmet title={title} />
        <div className="movie-about">
          <img src={poster} alt={"mynd fyrir bíómyndina " + title} />
          <div className="movie-info">
            <h2 className="movie-page_release-date">{dateString}</h2>
            <h1 className="movie-title">{title}</h1>
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
      </div>
    );
  }

  render() {
    const { message, isFetching } = this.props;
    const { movies, upcomingMovies } = this.state;

    if (message) return (<p>{message}</p>);

    if (isFetching || !movies || !upcomingMovies) return (<Loading />);

    const { match } = this.props;
    const { id } = match.params;

    let movie = movies.filter(movie => movie.id === parseInt(id));

    if (movie.length === 0) {
      movie = upcomingMovies.filter(movie => movie.id === parseInt(id));
      return this.renderUpcomingMovie(movie[0]);
    }

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

    const { imdb } = ratings;
    const { results } = trailers[0];

    let trailerPlaylist = "";
    results.forEach(result => trailerPlaylist += "," + result.key);

    /* Notað til að bæta kommu milli leikstjóra ef þeir eru
       fleiri en einn, 'og' síðan sett fyrir seinasta leikstjóran */
    let directors = `Leikstjóri: ${directors_abridged[0].name}`;
    if (directors_abridged.length > 1) {
      directors = 'Leikstjórar: ' + directors_abridged[0].name;
      for (let i = 1; i < directors_abridged.length; i++) {
        if (i === directors_abridged.length-1) {
          directors += ` og ${directors_abridged[i].name}`;
        } else {
          directors += `, ${directors_abridged[i].name}`;
        }
      }
    }

    return (
      <div className="movie-page">
        <Helmet title={title} />
        <div className="movie-about">
          <img src={poster} alt={"mynd fyrir bíómyndina " + title} />
          <div className="movie-info">
            <h1 className="movie-title">{title}</h1>
            <div className="movie-page-rating">
              <p>{imdb}</p>
              <a href={"https://www.imdb.com/title/tt" + ids.imdb}>
                <img className="logo" src={`${basename}/imdb.png`} alt="imdb logo" />
              </a>
            </div>
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
        <div className="showtimes">
          {movie &&
            showtimes.map(theater => {
              const { name, id } = theater.cinema;
              const { schedule } = theater;
              return (
                <section key={id} className="theater-showtimes">
                  <h1>{name}</h1>
                  <div className="schedules">
                    {schedule.map((schedule, index) => {
                      return (
                        <a key={`${id}${index}`} href={schedule.purchase_url}>
                          <Button className="schedule">
                            <p>{schedule.time}</p>
                          </Button>
                        </a>
                      )
                    })
                    }
                  </div>
                </section>
              )
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    upcomingMovies: state.upcomingMovies.movies,
    isFetchingUpcoming: state.upcomingMovies.isFetching,
    movies: state.movies.movies,
    isFetching: state.movies.isFetching,
  }
}
export default withRouter(connect(mapStateToProps)(MoviePage));