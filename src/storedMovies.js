// Föll til að geyma og sækja myndir frá localstorage
async function getStored(name) {
  const storedMovies = JSON.parse(window.localStorage.getItem(name));
  
  if (storedMovies) {
    const { timestamp } = storedMovies;
    if (new Date() - new Date(timestamp) < 1000 * 60 * 60 * 2) {
      const { movies } = storedMovies;
      return movies;
    }
  }
  return null;
}

async function setStored(name, movies) {
  const data = {
    movies,
    timestamp: new Date(),
  }

  window.localStorage.setItem(name, JSON.stringify(data));
}

export {
  getStored,
  setStored,
}