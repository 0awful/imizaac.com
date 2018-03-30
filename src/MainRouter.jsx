import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Code from './Code.jsx';
import Codes from './Codes.jsx';
import Home from './Home.jsx';
import Inquiries from './Inquiries.jsx';
import NotFound from './NotFound.jsx';
import Project from './Project.jsx';
import Projects from './Projects.jsx';
import Social from './Social.jsx';
import Writeup from './Writeup.jsx';
import Writeups from './Writeups.jsx';

const MainRouter = props => {
  console.log('Router Props', props);
  console.log('Router passes', props.projects);
  let projects = props.projects;
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* generic projects folders + aliases */}
      <Route
        path="/projects"
        component={props => <Projects projects={projects} />}
      />
      <Route path="/projects/proj/" component={Projects} />
      {/* specific project directory + aliases*/}
      <Route path="/projects/p/:name" component={Project} />
      <Route path="/projects/proj/:name" component={Project} />
      {/* generic writeup directory + aliases*/}
      <Route path="/projects/w/" component={Writeups} />
      <Route path="/projects/writeups/" component={Writeups} />
      {/* specific writeup directory + aliases*/}
      <Route path="/projects/w/:name" component={Writeup} />
      <Route path="/projects/writeups/:name" component={Writeup} />
      {/* generic code directory + aliases*/}
      <Route path="/projects/c/" component={Codes} />
      <Route path="/projects/code/" component={Codes} />
      {/* specific code directory + alias*/}
      <Route path="/projects/c/:name" component={Code} />
      <Route path="/projects/code/:name" component={Code} />
      {/* generic social directory*/}
      <Route path="/social" component={Social} />
      {/* specific social directory*/}
      <Route path="/social/:name" component={Social} />
      {/* inquires */}
      <Route path="/inquiries" component={Inquiries} />
      {/* 404 case*/}
      <Route component={NotFound} />
    </Switch>
  );
};
export default MainRouter;
