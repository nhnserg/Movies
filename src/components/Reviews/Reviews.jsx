// components/Reviews.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import reviewsStyles from './Reviews.module.css';
import { getMovieReviews } from '../../service/api';
import notification from '../../helpers/notification';
import Loader from '../components/Loader/Loading';

const Reviews = () => {
    const { movieId } = useParams();

    const [reviews, setReviews] = useState([]);
    const [loader, setLoader] = useState(false);


    useEffect(() => {
        setLoader(true);

        const fetchReviews = async () => {
            try {
                const movieReviews = await getMovieReviews(movieId);
                setReviews(movieReviews);
            } catch ({ message }) {
                notification(message);
            } finally {
                setLoader(false);
            }
        };

        fetchReviews();
    }, [movieId]);

    return (
        <div className={styles.container}>
            {loader && <Loader />}
            <h2 className={styles.sectionTitle}>Reviews</h2>
            <ul className={styles.reviewList}>
                {reviews.map((review) => (
                    <li key={review.id} className={styles.reviewItem}>
                        <p className={reviewsStyles.reviewAuthor}>{review.author}</p>
                        <p className={reviewsStyles.reviewContent}>{review.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reviews;
