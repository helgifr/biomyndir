import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Route, Switch, withRouter } from 'react-router-dom'

import logo from './logo.svg';
import Button from './components/button';
import Movie from './components/movie';

import NotFound from './routes/not-found';
import Home from './routes/home';
import MoviePage from './routes/moviePage';

import './App.css';

class App extends Component {

  render() {

    return (
      <main className="main__content">
        <Helmet defaultTitle="Bíómyndir landsins" titleTemplate="%s" />
        <Switch location={this.props.location}>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" exact component={MoviePage} />
          {/* todo fleiri route */}
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    isFetching: state.movies.isFetching,
  }
}
export default withRouter(connect(mapStateToProps)(App));
