import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home.jsx';
import Inquiries from './Inquiries.jsx';
import NotFound from './NotFound.jsx';

import Projects from './Projects.jsx';
import Social from './Social.jsx';

const MainRouter = props => {
  let projects = props.projects;
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* generic projects folders + aliases */}
      <Route
        path="/projects"
        component={() => <Projects projects={projects} />}
      />

      {/* generic social directory*/}
      <Route path="/social" component={Social} />
      {/* inquires */}
      <Route path="/inquiries" component={Inquiries} />
      {/* 404 case*/}
      <Route component={NotFound} />
    </Switch>
  );
};
export default MainRouter;
