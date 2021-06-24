import React from 'react';
import { Link } from 'react-router-dom';

import StarIcon from './StarIcon';

const CardMovie = ({ movies }) => {
  const goToTheFilm = (movie) => {
    localStorage.removeItem('movie');
    localStorage.setItem('movie', JSON.stringify(movie));
  };

  return (
    <>
      {movies
        ? movies.map((element) => (
            <div key={element.id} className="card-movie">
              <div className="card-movie__inner">
                <img src={element.large_cover_image} alt="Movie image" />

                <div className="card-movie__info">
                  <div className="card-movie__info-raiting">
                    <StarIcon />
                    <span>{element.rating}</span>
                  </div>

                  <div className="card-movie__info-genre">
                    <p>{element.genres[0]}</p>
                    <p>{element.genres[1]}</p>
                  </div>

                  <Link
                    className="card-movie__info-button"
                    onClick={() => goToTheFilm(element)}
                    to={`/${element.id}`}
                  >
                    More
                  </Link>
                </div>
              </div>

              <div className="card-movie__additional-info">
                <p className="title">{element.title}</p>
                <p className="year">{element.year}</p>
              </div>
            </div>
          ))
        : null}
    </>
  );
};

export default CardMovie;
