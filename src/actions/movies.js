import api from '../api';

export const MOVIES_REQUEST = 'MOVIES_REQUEST';
export const MOVIES_ERROR = 'MOVIES_ERROR';
export const MOVIES_SUCCESS = 'MOVIES_SUCCESS';

function requestMovies() {
  return {
    type: MOVIES_REQUEST,
    isFetching: true,
    movies: null,
  }
}

function moviesError(message) {
  return {
    type: MOVIES_ERROR,
    isFetching: false,
    movies: null,
    message,
  }
}

function receiveMovies(movies) {
  return {
    type: MOVIES_SUCCESS,
    isFetching: false,
    movies,
  }
}

export const getMovies = () => {
  return async (dispatch) => {
    dispatch(requestMovies());

    let response;
    try {
      response = await api.getMovies();
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

export const getMovie = (id) => {
  return async (dispatch) => {
    dispatch(requestMovies());

    let response;

    try {
      response = await api.getMovie(id);
    } catch (e) {
      console.log('nbei');
      
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
