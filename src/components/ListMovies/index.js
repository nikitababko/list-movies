import React, { useState, useEffect } from 'react';

import CardMovie from 'components/CardMovie';

import './index.scss';

const ListMovies = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch('https://yts.mx/api/v2/list_movies.json?limit=8')
      .then((response) => response.json())
      .then((result) => setMovies(result.data.movies))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="list-movies">
      <div className="list-movies__body">
        <CardMovie movies={movies} />
      </div>
    </div>
  );
};

export default ListMovies;
