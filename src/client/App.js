/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// Layouts
import Header from './components/layouts/Header';

// Pages
import Login from './components/containers/Login';
// import Exams from './components/containers/Exams';
import Questions from './components/containers/Questions';
import Users from './components/containers/Users';
import Blanksheet from './components/containers/Blanksheet';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            {/* <Route path="/exams">
              <Exams />
            </Route> */}
            <Route path="/questions">
              <Questions />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/#">
              <Blanksheet />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
