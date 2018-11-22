import {
  UPCOMING_MOVIES_REQUEST,
  UPCOMING_MOVIES_ERROR,
  UPCOMING_MOVIES_SUCCESS,
} from '../actions/upcomingMovies';

const initialState = {
  isFetchingUpcoming: false,
  upcomingMovies: null,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case UPCOMING_MOVIES_REQUEST:
      return {
        ...state,
        isFetchingUpcoming: action.isFetchingUpcoming,
        upcomingMovies: action.upcomingMovies,
      };

    case UPCOMING_MOVIES_ERROR:
      return {
        ...state,
        isFetchingUpcoming: action.isFetchingUpcoming,
        upcomingMovies: action.upcomingMovies,
        message: action.message,
      };

    case UPCOMING_MOVIES_SUCCESS:
      return {
        ...state,
        isFetchingUpcoming: action.isFetchingUpcoming,
        upcomingMovies: action.upcomingMovies,
      };

    default:
      return state;
  }
};