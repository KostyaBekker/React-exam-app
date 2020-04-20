/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// Layouts
import Header from './components/layouts/Header';

// Pages
import Login from './components/containers/Login';
import MyExam from './components/containers/MyExam';
import PassExam from './components/containers/PassExam';
import Exams from './components/containers/Exams';
import InfoExam from './components/containers/InfoExam';
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
            <Route path="/myexam">
              <MyExam />
            </Route>
            <Route path="/passexam">
              <PassExam />
            </Route>
            <Route path="/exam">
              <Exams />
            </Route>
            <Route path="/infoExam">
              <InfoExam />
            </Route>
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
