import React from 'react';

import StarIcon from 'components/ListMovies/StarIcon';

const CardMovie = ({ movies }) => {
  return (
    <>
      {movies.length
        ? movies.map((element) => (
            <div key={element.id} className="card-movie">
              <img src={element.background_image} alt="Movie image" />

              <div className="card-movie__info">
                <div className="card-movie__info-raiting">
                  <StarIcon />
                  <span>{element.rating}</span>
                </div>

                <div className="card-movie__info-genre">
                  <p>{element.genres[0]}</p>
                  <p>{element.genres[1]}</p>
                </div>

                <button className="card-movie__info-button">More</button>
              </div>
            </div>
          ))
        : null}
    </>
  );
};

export default CardMovie;
