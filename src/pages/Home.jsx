import { StyledHome } from 'components/Home.styled';
import { MovieList } from 'components/MovieList';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getPopularMovies } from 'servises/tmdbApiServise';

// const popularFilmsArr = await getPopularMovies().then(movies => movies.map(movie => <p>{movie.original_title}</p>))
// console.log(`popularFilmsArr:`, popularFilmsArr)

const Home = () => {
  const [popularFilms, setPopularFilms] = useState();
  const location = useLocation();

  useEffect(() => {
    const loadFilms = async () => {
      setPopularFilms(await getPopularMovies());
    };
    loadFilms();
  }, []);

  return (
    <StyledHome>
      <MovieList currentMoviesArr={popularFilms?.results} location={location}/>
    </StyledHome>
  );
};

export default Home;
