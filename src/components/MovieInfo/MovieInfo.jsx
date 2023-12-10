import defaultPoster from '../../images/default_poster.jpeg';
import {
    InfoSectionWrapper,
    Info,
    MovieInfoPoster,
    MovieDescription,
    MovieInfoTitle,
    Line,
    SubTitle,
    GenresList,
} from './Movieinfo.styled';


export const MovieInfo = ({
    movie: {
        backdrop_path,
        original_title,
        poster_path,
        overview,
        genres,
    },
}) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const posterSrc = poster_path ? posterUrl : defaultPoster;

    const backdropUrl = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
    const backdropSrc = backdrop_path ? backdropUrl : defaultPoster;

    return (
        <InfoSectionWrapper $backdropSrc={backdropSrc}>
            <Info>
                <MovieInfoPoster src={posterSrc} alt={original_title} />
                <MovieDescription>
                    <MovieInfoTitle>{original_title}</MovieInfoTitle>
                    <Line />
                    {/* Additional movie details */}
                    <SubTitle>Overview</SubTitle>
                    <p>{overview}</p>

                    {genres.length > 0 && (
                        <>
                            <SubTitle>Genres</SubTitle>
                            <GenresList>
                                {genres.map(genre => (
                                    <p key={genre.id}>{genre.name}</p>
                                ))}
                            </GenresList>
                        </>
                    )}
                </MovieDescription>
            </Info>
        </InfoSectionWrapper>
    );
};


export default MovieInfo;