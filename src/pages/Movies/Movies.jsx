import MovieDetails from 'pages/MovieDetails/MovieDetails';
import { Search } from 'components/Search/Search';
import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useParams,useSearchParams } from 'react-router-dom';

import { fetchSearch } from 'Services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';


  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  const handleSubmit = value => {
  };
  
  useEffect(() => {
    if (query) {
      fetchSearch(query).then(movies => {
        if (movies.results.length > 0) {
          setMovies(movies.results);
        }
      });
    }
  }, [query]);

  return (
    <main>
      <Search onSubmit={handleSubmit}></Search>
      <MoviesList movies={movies}></MoviesList>
      <MovieDetails movieId={movieId}></MovieDetails>
    </main>
  );
};
export default Movies;
