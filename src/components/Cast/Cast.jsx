// components/Cast.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import castStyles from './Cast.module.css';
import { getMovieCredits } from '../../service/api';
import notification from '../../helpers/notification';
import Loader from '../Loader/Loading';

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);

        const fetchCast = async () => {
            try {
                const credits = await getMovieCredits(movieId);
                setCast(credits);
            } catch ({ message }) {
                notification(message);
            } finally {
                setLoader(false)
            }
        };

        fetchCast();
    }, [movieId]);

    return (
        <div className={styles.container}>
            {loader && <Loader />}
            <h2 className={styles.sectionTitle}>Cast</h2>
            <ul className={styles.castList}>
                {cast.map((actor) => (
                    <li key={actor.id} className={styles.castListItem}>
                        <img src={`https://image.tmdb.org/t/p/w100${actor.profile_path}`} alt={actor.name} className={styles.castImage} />
                        <p className={castStyles.castName}>{actor.name}</p>
                        <p className={castStyles.castCharacter}>{actor.character}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cast;
