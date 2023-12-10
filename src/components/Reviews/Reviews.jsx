import { useParams } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { useEffect, useState } from "react";
import Loader from "components/Loader/Loader";
import { fetchReview } from "../../services/api";
import notification from "helpers/notification";
import {
  ReviewsWrapper,
  ReviewList,
  ReviewItem,
  ReviewAuthor,
  ReviewText,
  NoReviewsMsg,
} from "./Reviews.styled";

const Reviews = () => {
  const { movieId } = useParams();

  const [movieReview, setMovieReview] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await fetchReview(movieId);
        setMovieReview(results);
      } catch ({ message }) {
        notification(message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <ReviewsWrapper id="reviewsWrapper">
      {loading && <Loader />}
      {movieReview.length > 0 ? (
        <ReviewList>
          {movieReview.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              <ReviewAuthor>
                <IoMdPerson />
                {author}
              </ReviewAuthor>
              <ReviewText>{content}</ReviewText>
            </ReviewItem>
          ))}
        </ReviewList>
      ) : (
        <NoReviewsMsg>Sorry, no reviews</NoReviewsMsg>
      )}
    </ReviewsWrapper>
  );
};

export default Reviews;
