import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import { getMovies } from '../../actions/movies';
import { getStoredMovies } from '../../storedMovies';

import Button from '../../components/button';
import Loading from '../../components/loading';

import './MoviePage.css';

const basename = process.env.PUBLIC_URL || '';

class MoviePage extends Component {

  state = {
    movies: null,
    done: false,
  }

  async componentDidMount() {
    const movies = await getStoredMovies();
    if (movies) {
      this.setState({ movies, done: true });
    }
    else {
      const { dispatch } = this.props;
      await dispatch(getMovies());
    }
  }

  componentDidUpdate() {
    const { isFetching, movies, message } = this.props;
    const { done } = this.state;

    if (!isFetching && !done) {
      if (movies) {
        this.setState({ movies, done: true });
      } else {
        console.warn(message);
      }
    } else if (isFetching) {
      console.info('Fetching movies');
    }
  }

  render() {
    const { message, isFetching } = this.props;
    const { movies } = this.state;

    if (message) return (<p>{message}</p>);

    if (isFetching || !movies) return (<Loading />);

    const { match } = this.props;
    const { id } = match.params;

    const movie = movies.filter(movie => movie.id === parseInt(id));

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
       'og' síðan sett fyrir seinasta leikstjóran */
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
    movies: state.movies.movies,
    isFetching: state.movies.isFetching,
  }
}
export default withRouter(connect(mapStateToProps)(MoviePage));