import { StyledCast } from 'components/MovieDetails.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCurrentMovieCast, setFilmPoster } from 'servises/tmdbApiServise';

const Cast = () => {
  const { movieId } = useParams();
  const [currentMovieCast, setCurrentMovieCast] = useState(null);

  useEffect(() => {
    const loadCast = async () => {
      setCurrentMovieCast(await getCurrentMovieCast(movieId));
    };
    loadCast();
  }, []);

  
  return (
    <div className='cast add-inform-block'>
      <ul className="cast-list">
        {currentMovieCast &&
          currentMovieCast.cast.map(actor => (
            <li className="cast-item" key={actor.id} >
              <img className='actor-profile' src={setFilmPoster(actor.profile_path)} alt="" width={150} />
              <p className='text'>{actor.name}</p>
              <p className='text'>Character: {actor.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast