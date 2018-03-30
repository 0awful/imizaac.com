import React from 'react';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

import Drawer from './Drawer.jsx';
import Header from './Header.jsx';
import MainRouter from './MainRouter';
import Theme from './Theme';
import preload from './data.json';

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

  render = () => {
    console.log('app props', preload);
    console.log('app passes', preload.projects);
    return (
      <MuiThemeProvider muiTheme={Theme}>
        <BrowserRouter>
          <div className="App">
            <Header title={this.redirect} left={this.toggleDrawer} />
            <Drawer open={this.state.drawerOpen} toggle={this.toggleDrawer} />
            <MainRouter projects={preload.projects} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  };
}

export default App;
