import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import AddEditUser from './modalPage/AddEditUser';
import { deleteUser } from '../../redux/actionsAdmin';
import '../../app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line react/prefer-stateless-function
Modal.setAppElement('#root');

class Users extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      modalIsType: '',
      user: ''
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = (type, item) => {
    this.setState({
      modalIsOpen: true,
      modalIsType: type,
      user: item
    });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'black';
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      user: ''
    });
  }

  deleteUserClick = (id) => {
    this.props.deleteUser(id);
  };

  render() {
    // console.log(this.props);
    // console.log(this);
    return (
      <div className="table__wrap">
        <div>
          <div className="header__table">
            <span><b>Users</b></span>
            <Button variant="primary" type="submit" onClick={() => this.openModal('new')}>
              Add
            </Button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
            >
              <h2 ref={subtitle => this.subtitle = subtitle} > </h2>
              {this.state.modalIsType === 'new'
                ?
                <AddEditUser onClose={this.closeModal} userChange={'addUser'}/>
                :
                <AddEditUser user={this.state.user} onClose={this.closeModal} userChange={'editUser'}/>
              }
              <Button style={{ margin: '15px 0' }} onClick={this.closeModal}>cancel</Button>
            </Modal>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.listUsers.map((item, index) => (
                  <tr key={index}>
                    <td>{ index + 1 }</td>
                    <td>{ item.valueName }</td>
                    <td>{ item.valueEmail }</td>
                    <td>{ item.valueRole }</td>
                    <td>
                      <button onClick={() => this.openModal( 'edit', item )}>edit</button>
                      <button onClick={() => this.deleteUserClick(item.idUser)} >delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listUsers: state.listUsers,
});

export default connect(mapStateToProps, { deleteUser })(Users);
