import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom'

import { getMovies } from '../../actions/movies';

import logo from '../../logo.svg';
import Button from '../../components/button';
import Movie from '../../components/movie';

import './Home.css';

class Home extends Component {

  state = {
    allMovies: [],
    movies: [],
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
    const cinemas = JSON.parse(window.localStorage.getItem('cinemas'));
    if (cinemas) {
      console.log('asdfas');
      this.setState({ cinemas, sortMovies: true });
    }
    await dispatch(getMovies());
  }

  componentDidUpdate(prevProps, prevState) {
    const { isFetching, movies } = this.props;
    const { done, sortMovies, cinemas } = this.state;

    if (!isFetching && !done) {
      if (movies) {
        console.log(movies);
        this.setState({ allMovies: movies, movies, done: true });
      } else {
        console.log('damn dude', movies);
      }
    } else if (isFetching) {
      console.log('we fetching, boi');
    } else if (sortMovies) {
      this.sortMovies(cinemas);
    }
  }

  cinemaButton(index) {
    const { cinemas } = this.state;
    cinemas[index].pushed = !cinemas[index].pushed;
    this.sortMovies(cinemas);
  }

  sortMovies(cinemas) {
    const { allMovies } = this.state;
    const newMovieList = [];
    allMovies.forEach(movie => {
      let showMovie = false;
      cinemas.forEach(cinema => {
        if (!cinema.pushed) {
          const { showtimes } = movie;
          const filtered = showtimes.filter(showtime => showtime.cinema.name === cinema.name);
          if (filtered.length > 0) {
            showMovie = true;
          }
        }
      });
      if (showMovie) {
        newMovieList.push(movie);
      }
    });
    window.localStorage.setItem('cinemas', JSON.stringify(cinemas));
    console.log('sort');
    
    this.setState({ movies: newMovieList, cinemas, sortMovies: false });
  }

  render() {
    const { message, isFetching } = this.props;
    const { cinemas, movies } = this.state;
    console.log(`1 isFetching: ${isFetching}\nmovies: ${movies}`);
    if (isFetching) return (<p>sæki myndir...</p>);

    console.log(`isFetching: ${isFetching}\nmovies: ${movies}`);


    return (
      <div>
        <div className="cinemas">
          <h3>Bíóhús</h3>
          {cinemas.map((cinema, index) => {
            return(
              <Button key={index} pushed={cinema.pushed} onClick={() => this.cinemaButton(index)}>{cinema.name}</Button>
            );
          })}
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
  }
}
export default withRouter(connect(mapStateToProps)(Home));