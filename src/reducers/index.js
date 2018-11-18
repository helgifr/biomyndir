import { combineReducers } from 'redux';
import movies from './movies';
import upcomingMovies from './upcomingMovies';

export default combineReducers({
  movies,
  upcomingMovies,
});