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
    inquiriesOpen: false
  };

  toggleInquiries = () => {
    console.log(this.state.inquiriesOpen);
    if (this.state.inquiriesOpen) {
      this.setState({ inquiriesOpen: false });
    } else {
      this.setState({ inquiriesOpen: true });
    }
  };

  render = () => {
    return (
      <MuiThemeProvider muiTheme={Theme}>
        <BrowserRouter>
          <div className="App">
            <Header toggleInquiries={this.toggleInquiries} />
            <MainRouter
              projects={preload.projects}
              inquiriesOpen={this.state.inquiriesOpen}
              toggleInquiries={this.toggleInquiries}
            />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  };
}

export default App;
