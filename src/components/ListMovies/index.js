import React from 'react';

import CardMovie from 'components/CardMovie';

import './index.scss';

const ListMovies = () => {
  return (
    <div className="list-movies">
      <div className="list-movies__header">
        <div className="tag-movie">
          <p>Титаник</p>
        </div>
      </div>

      <div className="list-movies__body">
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
      </div>
    </div>
  );
};

export default ListMovies;
