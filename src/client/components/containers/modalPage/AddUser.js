import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addUser } from '../../../redux/actions';
import '../../../app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line react/prefer-stateless-function
class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEmail: '',
      inputName: '',
      inputRole: '',
      inputPassword: ''
    };
  }

  updateEmail = (inputEmail) => {
    this.setState({ inputEmail });
  };

  updateName = (inputName) => {
    this.setState({ inputName });
  };

  updateRole = (inputRole) => {
    this.setState({ inputRole });
  };

  updatePassword = (inputPassword) => {
    this.setState({ inputPassword });
  };

  addUser = (inputEmail, inputName, inputRole, inputPassword) => {
    this.props.addUser(inputEmail, inputName, inputRole, inputPassword);
    this.props.onClose();
  };

  setRandomPassword = () => {
    let result = '';
    const simbol = '0123456789qwertyuiopasdfghjklzxcvbnm';
    const simbolLength = simbol.length;

    for (let i = 0; i < 8; i++) {
      result += simbol.charAt(Math.random() * simbolLength);
    }
    this.setState({ inputPassword: result });
  };

  render() {
    const {
      inputEmail,
      inputName,
      inputRole,
      inputPassword
    } = this.state;
    return (
      <div>
        <h2><b>Add Users</b></h2>
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={e => this.updateEmail(e.target.value)}
              value={inputEmail}
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={e => this.updateName(e.target.value)}
              value={inputName}
              type="text"
              placeholder="Name"
            />
          </Form.Group>
          <Form.Group
            onChange={e => this.updateRole(e.target.id)}
            id={inputRole}
          >
            <Form.Label>
              Role
            </Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="user"
                name="formHorizontalRadios"
                id="user"
              />
              <Form.Check
                type="radio"
                label="admin"
                name="formHorizontalRadios"
                id="admin"
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={e => this.updatePassword(e.target.value)}
              value={inputPassword}
              type="text"
              placeholder="Password"
            />
          </Form.Group>
        </Form>
        <Button onClick={() => this.addUser(inputEmail, inputName, inputRole, inputPassword)}>
          add to list
        </Button>
        <Button style={{ margin: '0 15px' }} onClick={() => this.setRandomPassword()}>
          password
        </Button>
      </div>
    );
  }
}

export default connect(
  null,
  { addUser }
)(AddUser);
