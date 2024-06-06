// API
const API_KEY = "982fca304475ff06641e4df65b13c489";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (endpoint) => {
  const response = await fetch(
    `${BASE_URL}/movie/${endpoint}?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const fetchTVShows = async (endpoint) => {
  const response = await fetch(`${BASE_URL}/tv/${endpoint}?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMedia = async (query, type) => {
  const response = await fetch(
    `${BASE_URL}/search/${type}?api_key=${API_KEY}&query=${query}`
  );
  const data = await response.json();
  return data.results;
};

export const fetchDetails = async (type, id) => {
  const response = await fetch(`${BASE_URL}/${type}/${id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};
