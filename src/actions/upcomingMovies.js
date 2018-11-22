import api from '../api';

export const UPCOMING_MOVIES_REQUEST = 'UPCOMING_MOVIES_REQUEST';
export const UPCOMING_MOVIES_ERROR = 'UPCOMING_MOVIES_ERROR';
export const UPCOMING_MOVIES_SUCCESS = 'UPCOMING_MOVIES_SUCCESS';

function requestMovies() {
  return {
    type: UPCOMING_MOVIES_REQUEST,
    isFetchingUpcoming: true,
    upcomingMovies: null,
  }
}

function moviesError(message) {
  return {
    type: UPCOMING_MOVIES_ERROR,
    isFetchingUpcoming: false,
    upcomingMovies: null,
    message,
  }
}

function receiveMovies(upcomingMovies) {
  return {
    type: UPCOMING_MOVIES_SUCCESS,
    isFetchingUpcoming: false,
    upcomingMovies,
  }
}

export const getUpcomingMovies = () => {
  return async (dispatch) => {
    dispatch(requestMovies());

    let response;
    try {
      response = await api.getUpcomingMovies();
    } catch (e) {
      return dispatch(moviesError(e));
    }

    if (response.status === 401) {
      dispatch(moviesError(response.result));
    } else {
      const { result } = response;
      dispatch(receiveMovies(result));
    }
  }
}