import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails, setFilmPoster } from 'servises/tmdbApiServise';
import { StyledMovieDetails } from 'components/MovieDetails.styled';
import Cast from './Cast';
import Reviews from './Reviews';


const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [currentFilmData, setCurrentFilmData] = useState(null);

  useEffect(() => {
    const set = async () => setCurrentFilmData(await getMovieDetails(movieId));
    set();
  }, []);
  
  useEffect(() => {
    if (currentFilmData) {
      console.log(currentFilmData);
    }
  }, [currentFilmData]);
  
  console.log(`location.state?.from:`, location.state?.from)
  return (
    <StyledMovieDetails>
      <Link to={location.state?.from ?? '/'} className="go-back-link">
        Go back
      </Link>
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
      <div className="additional-information">
        <h2>Additional information</h2>
        <ul className="inform-list">
          <li className="inform-link">
            <Link to={'cast'} state={{ from: location.state?.from ?? '/' }}>
              Cast
            </Link>
          </li>
          <li className="inform-link">
          <Link to={'rewiews'} state={{ from: location.state?.from ?? '/' }}>
              Rewiews
            </Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="cast" element={<Cast/>} />
        <Route path="rewiews" element={<Reviews />} />
      </Routes>
    </StyledMovieDetails>
  );
};

export default MovieDetails;
