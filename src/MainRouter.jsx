import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from './NotFound.jsx';

import Projects from './Projects.jsx';

const MainRouter = props => {
  let projects = props.projects;
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={() => <Projects projects={projects} />}
      />

      {/* 404 case*/}
      <Route component={NotFound} />
    </Switch>
  );
};
export default MainRouter;
