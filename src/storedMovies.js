export async function getStoredMovies() {
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

export async function setStoredMovies(movies) {
  const data = {
    movies,
    timestamp: new Date(),
  }
  console.log(data);
  
  window.localStorage.setItem('movies', JSON.stringify(data));
}