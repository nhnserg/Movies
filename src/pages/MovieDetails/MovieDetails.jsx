import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Suspense } from 'react';
import {
  Style,
  MovieImg,
  MovieName,
  UserScore,
  Overview,
  OverviewText,
  Genres,
  GenresText,
  GoBackBtn,
  AdInfo,
  InfoList,
  Movie,
  MovieInfo,
  GenresStyles,
  InfoItem,
} from './MovieDetails.styled';
import { fetchMovieDetails } from 'Services/api';

const baseUrl = 'https://image.tmdb.org/t/p/w300';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (movieId) {
          const fetchedMovie = await fetchMovieDetails(movieId);
          const releaseYear = new Date(fetchedMovie.release_date).getFullYear();
          const percentage = (fetchedMovie.vote_average / 10) * 100;
          setMovie({ ...fetchedMovie, releaseYear, percentage });
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setMovie(null);
      }
    };
    fetchData();
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/images=1000x700';

  return (
    <main>
      {movie && (
        <Style>
          <Link to={backLink} style={{ textDecoration: 'none' }}>
            <GoBackBtn type="button">
              <AiOutlineArrowLeft />
              Go back
            </GoBackBtn>
          </Link>
          <Movie>
            <MovieImg
              src={
                movie.poster_path
                  ? `${baseUrl}${movie.poster_path}`
                  : defaultImg
              }
            ></MovieImg>

            <MovieInfo>
              <MovieName>
                {movie.title} ({movie.releaseYear})
              </MovieName>
              <UserScore>User Score: {movie.percentage.toFixed(1)}%</UserScore>
              <Overview>Overview</Overview>
              <OverviewText>{movie.overview}</OverviewText>
              <Genres>Genres</Genres>
              <GenresStyles>
                {movie.genres.map(genre => (
                  <GenresText key={genre.id}>{genre.name}</GenresText>
                ))}
              </GenresStyles>
            </MovieInfo>
          </Movie>
          <AdInfo>Additional information</AdInfo>
          <InfoList>
            <InfoItem>
              <Link to="cast">Cast</Link>
            </InfoItem>
            <InfoItem>
              <Link to="reviews">Reviews</Link>
            </InfoItem>
          </InfoList>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </Style>
      )}
    </main>
  );
};

export default MovieDetails;
