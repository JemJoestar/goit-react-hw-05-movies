import React from 'react';
import { Link } from 'react-router-dom';
import { setFilmPoster } from 'servises/tmdbApiServise';

export const MovieCard = ({ movie, location }) => {
  return (
    <li className="movie-item">
      <Link
        to={`/movie_details/${movie.id}`}
        state={{ from: location }}
        className="movie-link"
      >
        <img src={setFilmPoster(movie.poster_path)} alt="" width={300} />
        <p>{movie.title}</p>
      </Link>
    </li>
  );
};
