import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import GoBack from 'components/GoBack/GoBack';
import notification from 'helpers/notification';
import { getElementById } from '../service/api'; // Предположим, что путь верный
import Loader from '../components/Loader/Loading';
import InfoMovie from '../components/Movies/Movies';

const MovieDetails = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const [info, setInfo] = useState(null);
    const [loading, setLoader] = useState(true);

    const fetchElementById = async () => {
        try {
            const infos = await getElementById(movieId);
            setInfo(infos);
        } catch ({ message }) {
            notification(message);
        } finally {
            setLoader(false);
        }
    };

    useEffect(() => {
        if (!movieId) return;
        setLoader(true);
        fetchElementById();
    }, [movieId]);

    const goBack = location?.state?.from ?? "/";

    return (
        <>
            {loading && <Loader />}
            {<GoBack path={goBack} />}
            {info && <InfoMovie infos={info} />}
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
            <Outlet />
        </>
    );
};

export default MovieDetails;