import { CastItem, CastList } from "./Cast.styled"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchCast } from "../../services/api";
import notification from "helpers/notification";

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const fetchDataCast = async () => {
      try {
        const response = await fetchCast(movieId);
        setMovieCast(response.cast);
      } catch ({ message }) {
        notification(message)
      }
    };

    fetchDataCast();
  }, [movieId]);

  return (
    <CastList>
      {movieCast.length > 0 ? (
        movieCast.map(cast => (
          <CastItem key={cast.id}>
            <img
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                  : 'https://koshka.top/uploads/posts/2021-12/thumbs/1640007343_4-koshka-top-p-koti-ugar-4.jpg'
              }
              alt={cast.name}
            />
            <h1>{cast.name}</h1>
            <h3>Character: {cast.character}</h3>
          </CastItem>
        ))
      ) : (
        <div>No Cast information available</div>
      )}
    </CastList>
  );
};

export default Cast;