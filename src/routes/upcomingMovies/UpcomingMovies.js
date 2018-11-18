import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Myndir sóttar gegnum bakenda með redux
import { getUpcomingMovies } from '../../actions/upcomingMovies';

import Movie from '../../components/movie';
import Loading from '../../components/loading';

import { getStoredUpcomingMovies } from '../../storedMovies';

import './UpcomingMovies.css';

class UpcomingMovies extends Component {

  state = {
    movies: null,
    done: false,
  }

  async componentDidMount() {
    const { dispatch } = this.props;
    const movies = await getStoredUpcomingMovies();
    if (movies) {
      const sortedMovies = this.sortMovies(movies);
      this.setState({ movies: sortedMovies, done: true });
    }
    else {
      await dispatch(getUpcomingMovies());
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { isFetching, movies, message } = this.props;
    const { done } = this.state;

    if (!isFetching && !done) {
      if (movies) { // Myndir sóttar gegnum bakenda
        const sortedMovies = this.sortMovies(movies);
        this.setState({ movies: sortedMovies, done: true });
      } else if (message) {
        console.warn(message);
      }
    } else if (isFetching) {
      console.info('Fetching movies');
    }
  }

  sortMovies(movies) {
    const newMovies = movies.map(movie => {
      const date = new Date(movie['release-dateIS']);
      movie.date = date;
      return movie;
    });
    newMovies.sort((movieA, movieB) => movieA.date - movieB.date);

    return newMovies;
  }

  render() {
    const { message, isFetching } = this.props;
    const { movies } = this.state;

    if (isFetching) return (<Loading />);

    if (message) return (<p>{message}</p>);

    return (
      <div className="movies">
        {movies &&
          movies.map((movie) => {
            return (
              <Movie
                key={movie.id}
                movie={movie}
                upcoming={true}
              />
            )
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.upcomingMovies.movies,
    isFetching: state.upcomingMovies.isFetching,
  }
}
export default withRouter(connect(mapStateToProps)(UpcomingMovies));