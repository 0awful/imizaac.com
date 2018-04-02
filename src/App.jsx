import React from 'react';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

import Header from './Header';
import MainRouter from './MainRouter';
import Theme from './Theme';
import preload from './data.json';

class App extends Component {
  state = {
    writeupOpen: false
  };

  toggleWriteup = () => {
    console.log(this.state.writeupOpen);
    if (this.state.writeupOpen) {
      this.setState({ writeupOpen: false });
    } else {
      this.setState({ writeupOpen: true });
    }
  };

  render = () => {
    return (
      <MuiThemeProvider muiTheme={Theme}>
        <BrowserRouter>
          <div className="App">
            <Header writeup={this.toggleWriteup} />
            <MainRouter projects={preload.projects} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  };
}

export default App;
