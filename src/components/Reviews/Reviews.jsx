import { useParams } from "react-router-dom";
import { ReviewAuthor, ReviewItem, ReviewList, ReviewText } from "./Reviews.styled";
import { useEffect, useState } from "react";
import { fetchReview } from "../../Services/api";

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReview, setMovieReview] = useState([]);

  useEffect(() => {
    if (movieId) {
      fetchReview(movieId).then(movies => {
        if (movies.results && movies.results.length > 0) {
          setMovieReview(movies.results);
        }
      });
    }
  }, [movieId]);

  return (
    <div>
      <ReviewList>
        {movieReview.length > 0 ? (
          movieReview.map(movie => (
            <ReviewItem key={movie.id}>
              <ReviewAuthor>Author: {movie.author}</ReviewAuthor>
              <ReviewText>{movie.content}</ReviewText>
            </ReviewItem>
          ))) :
          (<ReviewItem key="no-reviews">
            We don't have any reviews for this movie.
          </ReviewItem>

          )}
      </ReviewList>
    </div>
  );
};

export default Reviews;