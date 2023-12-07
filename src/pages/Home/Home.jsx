import { Main, Title } from './Home.styled';
import MoviesList from '../../components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { fetchTrend } from '../../services/api';

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
    <Main>
      <Title></Title>
      <MoviesList movies={movies}></MoviesList>
    </Main>
  );
};
export default Home;
