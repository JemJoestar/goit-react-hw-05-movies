import React from 'react'
import { setFilmPoster } from 'servises/tmdbApiServise'


export const MovieDetailsSection = ({currentFilmData}) => {
  return (
    <div className="movie-details">
        <div className="poster-box">
          <img
            src={setFilmPoster(currentFilmData?.poster_path)}
            alt={currentFilmData?.title}
            width={300}
          />
        </div>
        <div>
          <h1>
            {currentFilmData?.title} (
            {currentFilmData?.release_date.slice(0, 4)})
          </h1>
          <p className="text">
            User score {Math.round(currentFilmData?.vote_average * 10)}%
          </p>
          <h2>Overview</h2>
          <p className="text">{currentFilmData?.overview}</p>
          <h2>Genres</h2>
          <p className="genres">
            {currentFilmData?.genres.map(genre => (
              <span className="genre text" key={genre.id}>
                {genre.name}
              </span>
            ))}
          </p>
        </div>
      </div>
  )
}
