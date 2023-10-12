import React from 'react'
import { Link } from 'react-router-dom'

export const AdditionalInformation = ({location}) => {
  return (
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
  )
}


