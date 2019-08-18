import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Error from './pages/Error';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/error" component={Error} />
    </Switch>
  );
}
