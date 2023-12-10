import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { getfetchSearch } from '../../services/api';
import notification from 'helpers/notification';
import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import GoBackBtn from 'components/GoBackBtn/GoBackBtn';
import Scroll from 'components/Scroll/Scroll'
import {
  AdLinksWrap,
  AdLink,
} from './MovieDetails.styled'


const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    setLoading(true);

    const fetchData = async () => {
      try {
        const fetchedMovie = await getfetchSearch(movieId);
        setMovie(fetchedMovie);
      } catch ({ message }) {
        notification(message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  const goBackPath = location?.state?.from ?? '/';

  return (
    <>
      {loading && <Loader />}
      <GoBackBtn path={goBackPath} />
      {movie && <MovieInfo movie={movie} />}
      <AdLinksWrap>
        <AdLink to="cast">Cast</AdLink>
        <AdLink to="reviews">Reviews</AdLink>
      </AdLinksWrap>
      <Scroll />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
