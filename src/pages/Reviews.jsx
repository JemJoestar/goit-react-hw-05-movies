import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCurrentMovieRewiews } from 'servises/tmdbApiServise';

export const Reviews = () => {
  const { movieId } = useParams();
  const [currentRewiews, setCurrentRewiews] = useState(null);

  useEffect(() => {
    const loadCast = async () => {
      setCurrentRewiews(await getCurrentMovieRewiews(movieId));
    };
    loadCast();
  }, []);

  useEffect(() => {
    if (currentRewiews) {
      console.log(`currentMovieRewiews:`, currentRewiews);
    }
  }, [currentRewiews]);

  return (
    <ul className="rewiew-list">
      {currentRewiews &&
        (currentRewiews.results.length === 0 ? (
          <p>Sorry, there is no rewiews on this movie</p>
        ) : (
          currentRewiews.results.map(rewiew => (
            <li className="rewiew-item" key={rewiew.id}>
              <p className="text">{rewiew.author}</p>
              <p className="text">{rewiew.content}</p>
            </li>
          ))
        ))}
    </ul>
  );
};

export default Reviews;
