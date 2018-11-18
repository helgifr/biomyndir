import { setStoredMovies, setStoredUpcomingMovies } from './storedMovies';

const baseurl = process.env.REACT_APP_SERVICE_URL || "https://bio-server.herokuapp.com";

const options = {
  headers: {
    authorization: 'Bearer Kappa',
  },
  method: 'GET',
};

async function getMovies() {
  const url = baseurl;

  const response = await fetch(url, options);

  const result = await response.json();

  if (response.status === 200) {
    setStoredMovies(result);
  }

  return { result, status: response.status };
}

async function getUpcomingMovies() {
  const url = `${baseurl}/upcoming`;

  const response = await fetch(url, options);

  const result = await response.json();

  if (response.status === 200) {
    setStoredUpcomingMovies(result);
  }

  return { result, status: response.status };
}

export default {
  getMovies,
  getUpcomingMovies,
}