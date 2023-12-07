import { CastImg, CastItem, CastList, CastName, Character } from "./Cast.styled"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchCast } from "../../services/api";
import Loader from "components/Loader/Loader";

const baseUrl = 'https://image.tmdb.org/t/p/w200';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/images=300x200';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCastData = async () => {
      try {
        const data = await fetchCast(movieId);
        setMovieCast(data.cast);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cast information', error);
        setLoading(false);
      }
    };

    fetchCastData();
  }, [movieId]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <CastList>
          {movieCast?.length > 0 ? (
            movieCast.map(movie => (
              <CastItem key={movie.id}>
                <CastImg
                  src={
                    movie.profile_path
                      ? `${baseUrl}${movie.profile_path}`
                      : defaultImg
                  }
                  alt=""
                ></CastImg>
                <CastName>{movie.name}</CastName>
                <Character>Character: {movie.character}</Character>
              </CastItem>
            ))
          ) : (
            <p>No cast information available</p>
          )}
        </CastList>
      )}
    </div>
  );
}
export default Cast;