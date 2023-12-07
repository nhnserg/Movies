import { CastImg, CastItem, CastList, CastName, Character } from "./Cast.styled"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchCast } from "../../Services/api";

const baseUrl = 'https://image.tmdb.org/t/p/w200';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/images=300x200';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    if (movieId) {
      fetchCast(movieId).then(movies => {
        if (movies.cast.length > 0) {
          setMovieCast(movies.cast);
        }
      });
    }
  }, [movieId]);

  return (
    <div>
      <CastList>
        {movieCast.map(movie => {
          return (
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
          );
        })}

      </CastList>
    </div>
  );
}

export default Cast