import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Search, ListMovies } from 'components';

import './index.scss';

const Body = () => {
  return (
    <div className="body">
      <Switch>
        <Route exact path="/" component={ListMovies} />
        <Route exact path="/favorites" component={ListMovies} />
      </Switch>
    </div>
  );
};

export default Body;
