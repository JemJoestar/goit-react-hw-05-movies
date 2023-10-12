import { MovieCard } from 'components/MovieCard';
import { StyledMovies } from 'components/Movies.styled';
import { SearchForm } from 'components/SearchForm';
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMovieBySearchReq } from 'servises/tmdbApiServise';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [currentMoviesArr, setCurrentMoviesArr] = useState([]);
  const location = useLocation();

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ searchReq: event.target.search.value });
  };

 

  useEffect(() => {
    if (!searchParams.get('searchReq')) {
      return;
    }
    setCurrentMoviesArr([]);

    const preparePromice = async () => {
      return (
        (await getMovieBySearchReq(searchParams.get('searchReq'))).results ?? []
      );
    };

    const loadMovies = async () => {
      console.log(`preparePromice:`, preparePromice());
      const newData = await preparePromice();
      setCurrentMoviesArr(prevState => {
        return newData;
      });
    };

    loadMovies();
  }, [searchParams]);

  useEffect(() => {
    console.dir(currentMoviesArr);
  }, [currentMoviesArr]);

  return (
    <StyledMovies>
      <SearchForm onSubmit={handleSubmit} />
      <ul className="movie-list">
        {currentMoviesArr &&
        currentMoviesArr.length === 0 &&
        searchParams.get('searchReq') === '' ? (
          <p>Sorry, there is no movies by your request</p>
        ) : (
          currentMoviesArr.map(movie => (
            <MovieCard movie={movie} location={location} key={movie.id} />
          ))
        )}
      </ul>
    </StyledMovies>
  );
};

export default Movies;
