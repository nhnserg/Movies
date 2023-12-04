import axios from 'axios';

const KEY = '4c22694614865aab1f8d67ad6cba4463';
axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.params = {
  api_key: KEY,
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get('/3/trending/movie/week');

  return data.results;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`/3/movie/${id}`);

  return data;
};

export const searchMovies = async query => {
  const { data } = await axios.get(`/3/search/movie?query=${query}`);
  return data;
};

export const getMovieCredits = async id => {
  const { data } = await axios.get(`/3/movie/${id}/credits`);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(`3/movie/${id}/reviews`);

  return data;
};
