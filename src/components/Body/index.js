import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Search, ListMovies } from 'components';
import AboutFilm from 'components/ListMovies/AboutFilm/index.js';

import './index.scss';

const Body = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setMovie(JSON.parse(localStorage.getItem('movie')));
  }, []);

  return (
    <div className="body">
      <Switch>
        <Route exact path="/" component={ListMovies} />
        <Route exact path="/favorites" />
        <Route exact path="/:id" component={AboutFilm} />
      </Switch>
    </div>
  );
};

export default Body;
