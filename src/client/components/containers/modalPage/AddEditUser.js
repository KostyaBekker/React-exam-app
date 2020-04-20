import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addUser } from '../../../redux/actionsAdmin';
import { editUser } from '../../../redux/actionsAdmin';
import '../../../app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line react/prefer-stateless-function
class AddEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEmail: '',
      inputName: '',
      inputRole: '',
      inputPassword: ''
    };
  }

  componentWillMount = () => {
    if (this.props.userChange == 'editUser') {
      return (
        this.setState({ 
          inputEmail: this.props.user.valueEmail,
          inputName: this.props.user.valueName,
          inputRole: this.props.user.valueRole,
          inputPassword: this.props.user.valuePassword
        })
      );
    };
  }

  typePageName = () => {
    if (this.props.userChange == 'editUser') {
      return (<h2><b>Edit Exam</b></h2>);
    }
    return (<h2><b>Add Exam</b></h2>);
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

  editUser = () => {
    const { inputEmail, inputName, inputRole, inputPassword } = this.state;
    const valueId = this.props.user.valueId;
    this.props.editUser(inputEmail, inputName, inputRole, inputPassword, valueId);
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

  typeButton = (inputEmail, inputName, inputRole, inputPassword) => {
    if (this.props.userChange == 'editUser') {
      return (
        <Button onClick={() => this.editUser()}>
        edit
        </Button>
      );
    }
    return (
      <Button onClick={() => this.addUser(inputEmail, inputName, inputRole, inputPassword)}>
      add to list
      </Button>
    );
  }

  render() {
    const {
      inputEmail,
      inputName,
      inputRole,
      inputPassword
    } = this.state;
    return (
      <div>
        {
          this.typePageName()
        }
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
                defaultChecked={inputRole === 'user'}
              />
              <Form.Check
                type="radio"
                label="admin"
                name="formHorizontalRadios"
                id="admin"
                defaultChecked={inputRole === 'admin'}
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
        {
          this.typeButton(inputEmail, inputName, inputRole, inputPassword)
        }
        <Button style={{ margin: '0 15px' }} onClick={() => this.setRandomPassword()}>
          password
        </Button>
      </div>
    );
  }
}

export default connect(
  null,
  { addUser, editUser }
)(AddEditUser);
