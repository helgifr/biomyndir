// Föll til að geyma og sækja myndir frá localstorage
async function getStoredMovies() {
  const storedMovies = JSON.parse(window.localStorage.getItem('movies'));
  
  if (storedMovies) {
    const { timestamp } = storedMovies;
    if (new Date() - new Date(timestamp) < 1000 * 60 * 60 * 2) {
      const { movies } = storedMovies;
      return movies;
    }
  }
  return null;
}

async function setStoredMovies(movies) {
  const data = {
    movies,
    timestamp: new Date(),
  }

  window.localStorage.setItem('movies', JSON.stringify(data));
}

async function getStoredUpcomingMovies() {
  const storedMovies = JSON.parse(window.localStorage.getItem('upcomingMovies'));
  
  if (storedMovies) {
    const { timestamp } = storedMovies;
    if (new Date() - new Date(timestamp) < 1000 * 60 * 60 * 2) {
      const { movies } = storedMovies;
      return movies;
    }
  }
  return null;
}

async function setStoredUpcomingMovies(movies) {
  const data = {
    movies,
    timestamp: new Date(),
  }

  window.localStorage.setItem('upcomingMovies', JSON.stringify(data));
}

export {
  getStoredMovies,
  setStoredMovies,
  getStoredUpcomingMovies,
  setStoredUpcomingMovies,
}