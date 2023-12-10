import defaultPoster from '../../images/default_poster.jpeg';
import {
  MovieList,
  Item,
  Poster,
  MovieLink,
  MovieTitle,
  MovieRelease,
} from './MoviesList.styled';


const MoviesList = ({ movies, location }) => {

  return (
    <MovieList>
      {movies.map(
        ({
          id,
          original_title,
          poster_path,
          release_date,
        }) => (
          <Item key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              <Poster
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w200${poster_path}`
                    : defaultPoster
                }
                alt={original_title}
              />
              <MovieTitle>{original_title}</MovieTitle>
              {release_date && (
                <MovieRelease />
              )}
            </MovieLink>
          </Item>
        )
      )}
    </MovieList>
  );
};

export default MoviesList;
