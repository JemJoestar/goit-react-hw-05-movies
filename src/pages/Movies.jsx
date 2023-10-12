import { StyledMovies } from 'components/Movies.styled';
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

  const preparePromice = async () => {
    return (
      (await getMovieBySearchReq(searchParams.get('searchReq'))).results ?? []
    );
  };

  const loadMovies = async () => {
    console.log(`preparePromice:`, preparePromice());
    const newData = await preparePromice();
  };

  useEffect(() => {
    if (!searchParams.get('searchReq')) {
      return;
    }
    loadMovies();
  }, [searchParams]);

  useEffect(() => {
    console.dir(currentMoviesArr);
  }, [currentMoviesArr]);

  return (
    <StyledMovies>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit">submit</button>
      </form>
      <button onClick={loadMovies}>penis</button>
      <ul>
        {currentMoviesArr &&
          currentMoviesArr.map(movie => <p>{movie.title}</p>)}
      </ul>
    </StyledMovies>
  );
};

export default Movies;
