import React, { useState, useEffect } from 'react';

import SearchIcon from 'components/Header/assets/SearchIcon';
import CardMovie from 'components/ListMovies/CardMovie';

import './index.scss';

const Search = () => {
  const initialStateFoundMovie = () => {
    if (localStorage.getItem('foundMovie')) {
      return JSON.parse(localStorage.getItem('foundMovie'));
    } else {
      return [];
    }
  };

  const [foundMovie, setFoundMovie] = useState('');
  const [allMovies, setAllMovies] = useState([]);
  const [sortedMovie, setSortedMovie] = useState(initialStateFoundMovie());

  console.log(sortedMovie);

  const fetchMovies = () => {
    fetch('https://yts.mx/api/v2/list_movies.json?limit=50')
      .then((response) => response.json())
      .then((result) => setAllMovies(result.data.movies))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchMovies();
    setSortedMovie(JSON.parse(localStorage.getItem('foundMovie')));
  }, [foundMovie]);

  useEffect(() => {
    localStorage.removeItem('foundMovie');
  }, []);

  const handleFoundMovie = () => {
    const sortMovie = allMovies.filter(
      (element) => element.title === foundMovie
    );
    localStorage.setItem('foundMovie', JSON.stringify(sortMovie));
  };

  return (
    <div className="search">
      <div className="search__header">
        <div className="search__header-button">
          <input
            type="text"
            placeholder="Enter film title..."
            value={foundMovie}
            onChange={(e) => setFoundMovie(e.target.value)}
          />

          <button onClick={() => handleFoundMovie(foundMovie)}>
            <SearchIcon />
          </button>
        </div>

        <div className="search__header-found">
          {foundMovie ? (
            <div className="tag-movie">
              <p>{foundMovie}</p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="search__body">
        <CardMovie movies={sortedMovie} />
      </div>
    </div>
  );
};

export default Search;
