import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/actions';
import '../../app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line react/prefer-stateless-function
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      password: ''
    };
  }

  updateInput = (input) => {
    document.querySelector('.isValidEmail').classList.remove('isValidStyle');
    this.setState({ input });
  };

  updatePassword = (password) => {
    document.querySelector('.isValidPassword').classList.remove('isValidStyle');
    this.setState({ password });
  };

  isValid = () => {
    // const valid = document.querySelector('.isValidEmail');
    const { input, password } = this.state;
    let isValidLogin = true;
    let isValidPassword = true;
    if (input === '') {
      document.querySelector('.isValidEmail').classList.add('isValidStyle');
      isValidLogin = false;
    }
    if (password === '') {
      document.querySelector('.isValidPassword').classList.add('isValidStyle');
      isValidPassword = false;
    }
    if (isValidLogin && isValidPassword) {
      return true;
    }
  }

  login = (login, password) => {
    if (this.isValid()) {
      this.props.login(login, password);
      this.setState({
        input: '',
        password: ''
      });
      document.querySelector('.link').click();
    }
  };

  render() {
    // console.log(this.state);
    const { input, password } = this.state;
    return (
      <div className="form__wrap">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="isValidEmail"
              onChange={e => this.updateInput(e.target.value)}
              value={input}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="isValidPassword"
              onChange={e => this.updatePassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </Form>
        <Button onClick={() => this.login(input, password)} variant="primary" type="submit">Submit</Button>
        <Link className="link" to="/#" />
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login);
