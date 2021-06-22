import React, { useState, useEffect } from 'react';

import { CardMovie, Pagination } from 'components';

import './index.scss';
import Search from 'components/Search';

const ListMovies = () => {
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(8);
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch('https://yts.mx/api/v2/list_movies.json?limit=50')
      .then((response) => response.json())
      .then((result) => setMovies(result.data.movies))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // Get current posts
  const indexOfLastMovies = currentPage * moviesPerPage;
  const indexOfFirstMovies = indexOfLastMovies - moviesPerPage;
  const currentMovies = movies.slice(
    indexOfFirstMovies,
    indexOfLastMovies
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="list-movies">
      <Search />

      <div className="list-movies__header">
        <div className="tag-movie">
          <p>Титаник</p>
        </div>
      </div>

      <div className="list-movies__body">
        <CardMovie movies={currentMovies} />
      </div>

      <div className="list-movies__footer">
        <Pagination
          moviesPerPage={moviesPerPage}
          totalMovies={movies.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default ListMovies;
