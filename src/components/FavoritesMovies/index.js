import React, { useState, useEffect } from 'react';

import CardMovie from 'components/ListMovies/CardMovie';

const FavoritesMovies = () => {
  const [favoritesMovies, setFavoritesMovies] = useState([]);

  useEffect(() => {
    setFavoritesMovies(
      JSON.parse(localStorage.getItem('favoritesMovies'))
    );
  }, []);

  console.log(favoritesMovies);

  return (
    <div className="list-movies">
      <div className="list-movies__body">
        <CardMovie movies={favoritesMovies} />
      </div>
    </div>
  );
};

export default FavoritesMovies;
