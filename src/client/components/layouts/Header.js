import React, { PureComponent } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Form, Button, Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logout } from '../../redux/actionsAdmin';
import '../../app.css';

// Using "Stateless Functional Components"
class Header extends PureComponent {

  logoutClick = () => {
    this.props.logout();
  };

  render() {
    // console.log('props:', this.props);
    const { user } = this.props;
    if (user.type === 'user') {
      return (
        <nav>
          <Navbar bg="primary" variant="dark" className="header">
            <Nav className="mr-auto">
              <Link to="/myexam"><Button variant="outline-light">Exam</Button></Link>
            </Nav>
            <Form inline>
              <span className="user">{user.name}</span>
              <Link to="/#"><Button variant="outline-light" onClick={this.logoutClick}> Logout </Button></Link>
            </Form>
          </Navbar>
        </nav>
      );
    }

    if (user.type === 'admin') {
      return (
        <nav>
          <Navbar bg="primary" variant="dark" className="header">
            <Nav className="mr-auto">
              <Link to="/exam"><Button variant="outline-light">Exam</Button></Link>
              <Link to="/questions"><Button variant="outline-light">Questions</Button></Link>
              <Link to="/users"><Button variant="outline-light">Users</Button></Link>
            </Nav>
            <Form inline>
              <span className="user">{user.name}</span>
              <Link to="/#"><Button variant="outline-light" onClick={this.logoutClick}>Logout</Button></Link>
            </Form>
          </Navbar>
        </nav>
      );
    }

    return (
      <nav>
        <Navbar bg="primary" variant="dark" className="header">
          <Nav className="mr-auto"> </Nav>
          <Form inline>
            <Link to="/login"><Button variant="outline-light">Login</Button></Link>
          </Form>
        </Navbar>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
