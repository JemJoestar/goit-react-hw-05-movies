import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'servises/tmdbApiServise';
import { StyledMovieDetails } from 'components/MovieDetails.styled';
import Cast from './Cast';
import Reviews from './Reviews';
import { MovieDetailsSection } from 'components/MovieDetails';
import { AdditionalInformation } from 'components/AdditionalInformation';


const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [currentFilmData, setCurrentFilmData] = useState(null);

  useEffect(() => {
    const set = async () => setCurrentFilmData(await getMovieDetails(movieId));
    set();
  },[movieId]);
  
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
      <MovieDetailsSection currentFilmData={currentFilmData}/>

      <AdditionalInformation location={location}/>
      <Routes>
        <Route path="cast" element={<Cast/>} />
        <Route path="rewiews" element={<Reviews />} />
      </Routes>
    </StyledMovieDetails>
  );
};

export default MovieDetails;
