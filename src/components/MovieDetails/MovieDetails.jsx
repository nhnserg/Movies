// components/MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import movieDetailsStyles from './MovieDetails.module.css';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../../service/api';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [cast, setCast] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const details = await getMovieDetails(movieId);
                const credits = await getMovieCredits(movieId);
                const movieReviews = await getMovieReviews(movieId);

                setMovieDetails(details);
                setCast(credits);
                setReviews(movieReviews);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchData();
    }, [movieId]);

    return (
        <div className={styles.container}>
            <div className={movieDetailsStyles.movieDetailsContainer}>
                <img
                    src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`}
                    alt={movieDetails.title}
                    className={movieDetailsStyles.movieDetailsImage}
                />
                <div className={movieDetailsStyles.movieDetailsContent}>
                    <h2>{movieDetails.title}</h2>
                    <p>{movieDetails.overview}</p>

                    <div className={styles.sectionTitle}>Cast</div>
                    <ul className={styles.castList}>
                        {cast.map((actor) => (
                            <li key={actor.id} className={styles.castListItem}>
                                <img src={`https://image.tmdb.org/t/p/w100${actor.profile_path}`} alt={actor.name} className={styles.castImage} />
                                <p className={styles.castName}>{actor.name}</p>
                                <p className={styles.castCharacter}>{actor.character}</p>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.sectionTitle}>Reviews</div>
                    <ul className={styles.reviewList}>
                        {reviews.map((review) => (
                            <li key={review.id} className={styles.reviewItem}>
                                <p className={styles.reviewAuthor}>{review.author}</p>
                                <p className={styles.reviewContent}>{review.content}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
