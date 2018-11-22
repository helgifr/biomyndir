import {
  MOVIES_REQUEST,
  MOVIES_ERROR,
  MOVIES_SUCCESS,
} from '../actions/movies';

const initialState = {
  isFetching: false,
  movies: null,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case MOVIES_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching,
        movies: action.movies,
      };

    case MOVIES_ERROR:
      return {
        ...state,
        isFetching: action.isFetching,
        movies: action.movies,
        message: action.message,
      };

    case MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: action.isFetching,
        movies: action.movies,
      };

    default:
      return state;
  }
};