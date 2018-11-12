import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Route, Switch } from 'react-router-dom'
import CookieConsent from 'react-cookie-consent';

import Header from './components/header';

import NotFound from './routes/not-found';
import Home from './routes/home';
import MoviePage from './routes/moviePage';

import './App.css';

class App extends Component {

  render() {

    return (
      <main className="main">
        <Helmet defaultTitle="Bíómyndir landsins" titleTemplate="%s" />
        <Header />
        <div className="main__content">
          <Switch location={this.props.location}>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:id" component={MoviePage} />
            {/* todo fleiri route */}
            <Route component={NotFound} />
          </Switch>
        </div>
        <footer className="footer">
          <hr />
          <p>&copy; {new Date().getFullYear()} - Bíómyndir landsins</p>
        </footer>
        <CookieConsent buttonText="Allt í góðu">
          Þessi síða notar kökur til að bæta notendaupplifunina.
        </CookieConsent>
      </main>
    );
  }
}

export default App;
