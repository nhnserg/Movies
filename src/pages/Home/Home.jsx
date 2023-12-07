import { Title } from './Home.styled';
import MoviesList from '../../components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { fetchTrend } from '../../Services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrend().then(movies => {
      if (movies.results.length > 0) {
        setMovies(movies.results);
      }
    });
  }, []);
  return (
    <main>
      <Title>Trending today</Title>
      <MoviesList movies={movies}></MoviesList>
    </main>
  );
};
export default Home;
