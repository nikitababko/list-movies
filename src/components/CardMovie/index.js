import React from 'react';

import StarIcon from 'components/ListMovies/StarIcon';

const CardMovie = () => {
  return (
    <div className="card-movie">
      <img src="https://www.fillmurray.com/263/377" alt="Movie image" />

      <div className="card-movie__info">
        <div className="card-movie__info-raiting">
          <StarIcon />
          <span>7.4</span>
        </div>

        <div className="card-movie__info-genre">
          <p>Драма</p>
          <p>Боевик</p>
        </div>

        <button className="card-movie__info-button">More</button>
      </div>
    </div>
  );
};

export default CardMovie;
