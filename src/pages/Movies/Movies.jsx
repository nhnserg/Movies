import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import Search from 'components/Search/Search';
import { fetchMovieDetails } from '../../services/api';
import notification from 'helpers/notification';
import PaginationList from 'components/PaginationList/PaginationList';
import Scroll from 'components/Scroll/Scroll';
import smScroll from 'helpers/smScroll';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pg, setPg] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  const handleSearch = value => {
    setPg(1);
    setSearchParams({ query: value, page: pg });
  };

  useEffect(() => {
    const queryForSearch = searchParams.get('query') || '';
    if (!queryForSearch) return;
    setLoading(true);

    const fetchMoviesBySearch = async () => {
      try {
        const { page, results, total_pages } = await fetchMovieDetails(
          queryForSearch,
          pg
        );

        setMovies(results);
        setPg(page);
        setPageQty(total_pages);
        setSearchParams({ query: queryForSearch, page: pg });

        if (!results.length) {
          setSearchParams({});
          return notification(
            `Sorry, no movies found on query ${queryForSearch}`
          );
        }

        return results;
      } catch ({ message }) {
        notification(message);
      } finally {
        setLoading(false);

        smScroll('movieList');
      }
    };
    fetchMoviesBySearch();
  }, [searchParams, pg, setSearchParams]);

  return (
    <>
      {loading && <Loader />}
      <Search search={handleSearch} />

      {pageQty > 1 && (
        <PaginationList pageQty={pageQty} pg={pg} onChange={setPg} />
      )}

      {movies.length > 0 && <MoviesList movies={movies} location={location} />}

      <Scroll />
    </>
  );
};

export default Movies;