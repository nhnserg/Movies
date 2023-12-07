import axios from 'axios';
const KEY = '4c22694614865aab1f8d67ad6cba4463';
axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.params = {
  api_key: KEY,
};
export async function fetchTrend() {
  try {
    const response = await axios.get('/3/trending/movie/week');
    return response.data;
  } catch (error) {
    throw error;
  }
}
export async function fetchSearch(value) {
  try {
    const response = await axios.get(`/3/search/movie?query=${value}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchMovieDetails(id) {
  try {
    const response = await axios.get(`/3/movie/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCast(id) {
  try {
    const response = await axios.get(`/3/movie/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchReview(id) {
  try {
    const response = await axios.get(`/3/movie/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
