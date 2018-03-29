import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  deepPurple800,
  deepPurple900,
  deepPurpleA400
} from 'material-ui/styles/colors';
import './App.css';
import Code from './Code.jsx';
import Codes from './Codes.jsx';
import Drawer from './Drawer.jsx';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Inquiries from './Inquiries.jsx';
import NotFound from './NotFound.jsx';
import Project from './Project.jsx';
import Projects from './Projects.jsx';
import Social from './Social.jsx';
import Writeup from './Writeup.jsx';
import Writeups from './Writeups.jsx';

const redirect = () => {
  console.log('redirect called');
  window.location.replace('/');
};

let newTheme = lightBaseTheme;
newTheme.palette.primary1Color = deepPurple800;
newTheme.palette.primary2Color = deepPurpleA400;

class App extends Component {
  state = {
    drawerOpen: false
  };

  toggleDrawer = () => {
    if (this.state.drawerOpen) {
      this.setState({ drawerOpen: false });
    } else {
      this.setState({ drawerOpen: true });
    }
    console.log(this.state.drawerOpen);
  };

  render = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(newTheme)}>
      <BrowserRouter>
        <div className="App">
          <Header title={this.redirect} left={this.toggleDrawer} />
          <Drawer open={this.state.drawerOpen} toggle={this.toggleDrawer} />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* generic projects folders + aliases */}
            <Route path="/projects" component={Projects} />
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
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
