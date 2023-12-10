import axios from 'axios';

const KEY = '59ebc442501bddfafe2b400f88f1e660';
axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.params = {
  api_key: KEY,
};
export const fetchTrend = async () => {
  const { data } = await axios.get('/3/trending/movie/week');
  return data.results;
};
export const getfetchSearch = async id => {
  const { data } = await axios.get(`/3/movie/${id}`);

  return data;
};

export const fetchMovieDetails = async (query, page) => {
  const { data } = await axios.get(
    `/3/search/movie?query=${query}&page=${page}`
  );

  return data;
};

export const fetchCast = async id => {
  const { data } = await axios.get(`/3/movie/${id}/credits`);

  return data;
};

export const fetchReview = async id => {
  const { data } = await axios.get(`3/movie/${id}/reviews`);

  return data;
};
