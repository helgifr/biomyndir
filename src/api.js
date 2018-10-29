const baseurl = process.env.REACT_APP_SERVICE_URL;

async function getMovies() {

  const options = {
    headers: {
      authorization: 'Bearer Kappa',
    },
    method: 'GET',
  };

  const url = `${baseurl}`;

  const response = await fetch(url, options);
  console.log(response);
  

  const result = await response.json();

  return { result, status: response.status };
}

async function getMovie(id) {

  let token = JSON.parse(window.localStorage.getItem('token')) || undefined;
  if (token) {
    const { timestamp } = token;
    const now = new Date().getTime();
    console.log(now, timestamp);
    
    if (token === undefined || !token.value || now > timestamp) {
      token = await getToken();
    } else {
      token = token.value;
    }

  } else {
    token = await getToken();
  }

  const options = {
    headers: {
      'x-access-token': token,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  };

  const url = `${baseurl}/movies?imdbid=tt${id}`;

  const response = await fetch(url, options);
  

  const result = await response.json();

  return { result, status: response.status };
}

async function getToken() {
  const body = JSON.stringify({ username: 'snati', password: 'helgigummi' });

  const options = {
    body,
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  };

  const url = `${baseurl}/authenticate`;

  const response = await fetch(url, options);

  const result = await response.json();

  if (response.status === 200) {
    const { token } = result;
    const expirationMS = 1000 * 86400;
    const record = { value: token, timestamp: new Date().getTime() + expirationMS };
    localStorage.setItem('token', JSON.stringify(record));
  }

  return { result, status: response.status };
}

export default {
  getMovie,
  getMovies,
}