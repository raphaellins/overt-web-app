import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NewGame from './sections/NewGame';
import Home from './sections/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/new-game" component={NewGame} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}