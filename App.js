import React, { Component } from 'react';
import LoginContainer from './Components/LoginContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="container" className="inner-container">
      <LoginContainer />
      </div>
    );
  }
}

export default App;
