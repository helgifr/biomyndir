import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

// Myndir sóttar gegnum bakenda með redux
import { getMovies } from '../../actions/movies';

import Button from '../../components/button';
import Movie from '../../components/movie';
import Loading from '../../components/loading';

import { getStored } from '../../storedMovies';

import './Home.css';

class Home extends Component {

  state = {
    allMovies: null,
    movies: null,
    done: false,
    cinemas: [
      { name: "Álfabakki", pushed: false },
      { name: "Borgarbíó", pushed: false },
      { name: "Bíó Paradís", pushed: false },
      { name: "Sambíóin Egilshöll", pushed: false },
      { name: "Háskólabíó", pushed: false },
      { name: "Kringlubíó", pushed: false },
      { name: "Laugarásbíó", pushed: false },
      { name: "Sambíóin, Akureyri", pushed: false },
      { name: "Sambíóin, Keflavík", pushed: false },
      { name: "Smárabíó", pushed: false },
    ],
    sortMovies: false,
  }


  async componentDidMount() {
    const { dispatch } = this.props;
    const movies = await getStored('movies');
    if (movies) {
      this.setState({ allMovies: movies, movies, done: true });
    }
    else {
      await dispatch(getMovies());
    }
    const cinemas = JSON.parse(window.localStorage.getItem('cinemas'));
    if (cinemas) {
      this.setState({ cinemas, sortMovies: true });
    }
  }

  componentDidUpdate() {
    const { isFetching, movies, message } = this.props;
    const { done, sortMovies, cinemas } = this.state;

    if (!isFetching && !done) {
      if (movies) { // Myndir sóttar gegnum bakenda
        this.setState({ allMovies: movies, movies, done: true });
      } else if (message) {
        console.error(message);
      }
    } else if (isFetching) {
      console.info('Fetching movies');
    } else if (sortMovies) {
      this.sortMovies(cinemas);
    }
  }

  cinemaButton(index) {
    const { cinemas } = this.state;
    cinemas[index].pushed = !cinemas[index].pushed;
    this.sortMovies(cinemas);
  }

  invalidateCinemas() {
    const { cinemas } = this.state;
    cinemas.forEach((cinema) => cinema.pushed = true);
    this.sortMovies(cinemas);
  }

  sortMovies(cinemas) {
    const { allMovies } = this.state;
    const newMovieList = [];
    // Nota bíóhúsin sem eru valin
    const activeCinemas = cinemas.filter(cinema => !cinema.pushed);

    allMovies.forEach(movie => {
      let showMovie = false;
      activeCinemas.forEach(cinema => {
        const { showtimes } = movie;
        const showing = showtimes.some(showtime => showtime.cinema.name === cinema.name);
        if (showing) { // Mynd er sýnd í a.m.k. einu bíóhúsi
          showMovie = true;
          return;
        }
      });
      if (showMovie) {
        newMovieList.push(movie);
      }
    });
    // Geyma völdu kvikmyndahús
    window.localStorage.setItem('cinemas', JSON.stringify(cinemas));

    this.setState({ movies: newMovieList, cinemas, sortMovies: false });
  }

  render() {
    const { message, isFetching } = this.props;
    const { cinemas, movies } = this.state;

    if (isFetching) return (<Loading />);

    if (message) return (<p>{message}</p>);

    return (
      <div>
        <div className="cinemas">
          <h3>Bíóhús</h3>
          <div className="cinema-buttons">
            {cinemas.map((cinema, index) => {
              return(
                <Button
                  key={index}
                  pushed={cinema.pushed}
                  onClick={() => this.cinemaButton(index)}
                >
                {cinema.name}
                </Button>
              );
            })}
          </div>
          <Button type="cancel" onClick={() => this.invalidateCinemas()}>Afvelja allt</Button>
        </div>
        <div className="movies">
          {movies &&
            movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  movie={movie}
                />
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
    message: state.movies.message,
  }
}
export default withRouter(connect(mapStateToProps)(Home));