import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          Hi Hello my name is
        </p>
      </div>
    );
  }
}

export default hot(module)(App) ;
