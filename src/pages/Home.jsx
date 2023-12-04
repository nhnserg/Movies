import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../service/api';
import MoviesList from '../components/Movies/Movies';
import Loader from '../components/Loader/Loading';
import notification from '../helpers/notification';

const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);

        const fetchTrendingMoviesData = async () => {
            try {
                const response = await getTrendingMovies()
                setTrendingMovies(response);
            } catch ({ message }) {
                notification(message);
            } finally {
                setLoading(false);
            }
        }
        fetchTrendingMoviesData();
    }, []);

    return (
        <>
            {loading && <Loader />}
            {trendingMovies.length > 0 && <MoviesList movies={trendingMovies} />}
        </>
    )
};

export default Home;