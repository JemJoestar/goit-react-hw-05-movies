import { MovieList } from 'components/MovieList';
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

    const loadMovies = async () => {
      const newData = await  (await getMovieBySearchReq(searchParams.get('searchReq'))).results ?? []
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
      <MovieList currentMoviesArr={currentMoviesArr} searchParams={searchParams.get('searchReq')} location={location}/>
    </StyledMovies>
  );
};

export default Movies;
