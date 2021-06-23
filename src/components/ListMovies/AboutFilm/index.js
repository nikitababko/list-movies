import React, { useState, useEffect } from 'react';

import './index.scss';

const AboutFilm = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(JSON.parse(localStorage.getItem('movie')));
  }, []);

  // Add to favorites
  const addToFavorites = () => {
    localStorage.setItem('favoriteMovie', JSON.stringify(movie));
  };

  return (
    <div className="about-film">
      <div className="about-film__left-col">
        <img src={movie.large_cover_image} alt="" />
      </div>

      <div className="about-film__right-col">
        <h2 className="title">{movie.title}</h2>
        <p className="rating">
          <span>Rating: </span>
          {movie.rating}
        </p>
        <p className="runtime">Runtime: {movie.runtime} min</p>
        <p className="year">Year: {movie.year}</p>
        <div className="genres">
          <span>Genres:</span>
          <p>{movie.genres[0]}</p>
          <p>{movie.genres[1]}</p>
        </div>
        <p className="synopsis">
          <span>Synopsis</span>
          <p>{movie.synopsis}</p>
        </p>
        <button onClick={addToFavorites} className="button-favorites">
          Add to favorites
        </button>
      </div>
    </div>
  );
};

export default AboutFilm;
