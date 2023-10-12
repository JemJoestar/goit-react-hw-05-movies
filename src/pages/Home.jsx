import { StyledHome } from 'components/Home.styled';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getPopularMovies, setFilmPoster } from 'servises/tmdbApiServise';

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
      <ul className="popular-movie-list">
        {popularFilms &&
          popularFilms.results.map(film => (
            <li className="popular-movie-item" key={film.id}>
              <Link
                to={`/movie_details/${film.id}`}
                state={{ from: location }}
                className="movie-link"
              >
                <img src={setFilmPoster(film.poster_path)} alt="" width={300} />
                <p>{film.title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </StyledHome>
  );
};

export default Home;
