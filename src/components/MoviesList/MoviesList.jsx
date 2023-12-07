import defaultPoster from '../../images/default_poster.jpeg';
import { MovieList, MovieItem, MovieImage } from './MoviesList.styled'; // Assuming you have a styled component for the image
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieList>
      {movies.map((movie) => {
        const name = movie.name ?? movie.title;
        const imageUrl = movie.poster_path
          ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
          : defaultPoster

        return (
          <MovieItem key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              <MovieImage src={imageUrl} alt={name} />
              {name}
            </Link>
          </MovieItem>
        );
      })}
    </MovieList>
  );
};

export default MoviesList;
