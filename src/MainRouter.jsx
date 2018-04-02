import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from './NotFound';
import Projects from './Projects';

const MainRouter = props => {
  let projects = props.projects;
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={() => (
          <Projects
            projects={projects}
            inquiriesOpen={props.inquiriesOpen}
            toggleInquiries={props.toggleInquiries}
          />
        )}
      />

      {/* 404 case*/}
      <Route component={NotFound} />
    </Switch>
  );
};
export default MainRouter;
