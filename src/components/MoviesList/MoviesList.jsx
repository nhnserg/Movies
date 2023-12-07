import { MovieList, MovieItem } from './MoviesList.styled';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation()
  
  return (
    <MovieList>
      {movies.map(movie => {
        const name = movie.name ?? movie.title;
        if (location.pathname.includes('/movies')) {
          return (
            <MovieItem key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {name}
              </Link>
            </MovieItem>
          );
        } else {
          return (
            <MovieItem key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {name}{' '}
              </Link>
            </MovieItem>
          );
        }
      })}
    </MovieList>
  );
};

export default MoviesList;
