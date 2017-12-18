import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav_bar';
import LandingPage from './components/landing_page';
import PollsPage from './components/polls_page';
import SignUp from './components/sign_up';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route path="/polls" component={PollsPage} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
