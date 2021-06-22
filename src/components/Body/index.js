import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Search, ListMovies } from 'components';

import './index.scss';

const Body = () => {
  return (
    <div className="body">
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/trendings" component={ListMovies} />
      </Switch>
    </div>
  );
};

export default Body;
