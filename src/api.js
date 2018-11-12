import { setStoredMovies } from './storedMovies';

const baseurl = process.env.REACT_APP_SERVICE_URL || "https://bio-server.herokuapp.com";

async function getMovies() {

  const options = {
    headers: {
      authorization: 'Bearer Kappa',
    },
    method: 'GET',
  };

  const url = baseurl;

  const response = await fetch(url, options);

  const result = await response.json();

  if (response.status === 200) {
    setStoredMovies(result);
  }

  return { result, status: response.status };
}

export default {
  getMovies,
}