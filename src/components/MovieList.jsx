import { MovieCard } from './MovieCard';
import { StyledMovieList } from './MovieList.styled';

export const MovieList = ({
  currentMoviesArr,
  searchParams = "",
  location,
}) => {
  console.log(`searchParams:`, searchParams);
  return (
    <StyledMovieList className="movie-list">
      {currentMoviesArr &&
        (currentMoviesArr?.length === 0 && searchParams ? (
          <p>Sorry, there is no movies by your request</p>
        ) : (
          currentMoviesArr.map(movie => (
            <MovieCard movie={movie} location={location} key={movie.id} />
          ))
        ))}
    </StyledMovieList>
  );
};
