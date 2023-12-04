import Loader from "../components/Loader/Loading";
import MoviesList from "../components/MovieDetails/MovieDetails";
import SearchMovies from "../components/SearchMovies/SearchMovies";
import notification from "../helpers/notification";
import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getMoviesBySearch } from "../service/api"; // Предположим, что путь верный

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const location = useLocation();

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = value => {
        setSearchParams({ query: value });
    };

    const fetchMoviesBySearch = async () => {
        try {
            const querySearch = searchParams.get('query') || '';
            if (!querySearch) return;

            setLoading(true);

            const { results } = await getMoviesBySearch(querySearch);

            setMovies(results);

            if (!results.length) {
                notification(`Sry, no found the movies on query ${querySearch}`);
            }

            return results;
        } catch ({ message }) {
            notification(message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMoviesBySearch();
    }, [searchParams]);

    return (
        <div className="container">
            {loading && <Loader />}
            <SearchMovies search={handleSearch} />
            {movies.length > 0 && <MoviesList movies={movies} location={location} />}
        </div>
    );
};

export default Movies;