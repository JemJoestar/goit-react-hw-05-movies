import axios from 'axios';

const API_KEY = '49dc0fc8e483e00bf3a468afadd01091';
const URL = 'https://api.themoviedb.org/3';
const defaultPoster =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export const getPopularMovies = async () => {
  return await axios
    .get(`${URL}/trending/movie/week?api_key=${API_KEY}`)
    .then(response => response.data);
};

export const getMovieDetails = async movieId => {
  return await axios
    .get(`${URL}/movie/${movieId}?api_key=${API_KEY}`)
    .then(response => response.data);
};

export const setFilmPoster = posterPath =>
  posterPath ? `https://image.tmdb.org/t/p/w500${posterPath}` : defaultPoster;

export const getCurrentMovieCast = async movieId => {
  return await axios
    .get(`${URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(response => response.data);
};

export const getCurrentMovieRewiews = async movieId => {
  return axios
    .get(`${URL}/movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(response => response.data);
};

export const getMovieBySearchReq = async (searchReq) => {
  return axios
    .get(
      `${URL}/search/movie?api_key=${API_KEY}&query=${searchReq}`
    )
    .then(response => response.data);
};
