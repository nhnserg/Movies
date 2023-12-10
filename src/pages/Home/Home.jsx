import { Main, Title } from './Home.styled';
import MoviesList from '../../components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { fetchTrend } from '../../services/api';
import notification from 'helpers/notification';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchTrendings = async () => {
      try {
        const response = await fetchTrend();
        setMovies(response);
      } catch ({ message }) {
        notification(message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendings();
  }, []);

  return (

    <Main>
      {loading && <Loader />}
      <Title />
      <MoviesList movies={movies}></MoviesList>
    </Main>
  );
};
export default Home;
