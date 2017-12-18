import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav_bar';
import LandingPage from './components/landing_page';

class App extends Component {
  render() {
    return (
    <div>
      <NavBar/>
      <LandingPage />
      </div>
    );
  }
}

export default App;
