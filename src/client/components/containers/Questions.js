import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import AddQuestion from './modalPage/AddQuestion';
import EditQuestion from './modalPage/EditQuestion';
import { deleteQuestion } from '../../redux/actions';
import '../../app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line react/prefer-stateless-function
Modal.setAppElement('#root');

class Questions extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      modalIsType: '',
      question: ''
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = (type, item) => {
    this.setState({
      modalIsOpen: true,
      modalIsType: type,
      question: item
    });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'black';
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  deleteQuestionClick = (id) => {
    this.props.deleteQuestion(id);
  };

  render() {
    return (
      <div className="table__wrap">
        <div className="header__table">
          <span><b>Questions</b></span>
          <Button variant="primary" type="submit" onClick={() => this.openModal('newQuestion')}>
            Add
          </Button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
          >
            <h2 ref={subtitle => this.subtitle = subtitle}> </h2>
            {this.state.modalIsType === 'newQuestion'
              ?
                <AddQuestion onClose={this.closeModal} />
              :
                <EditQuestion question={this.state.question} onClose={this.closeModal} />
            }
            <Button style={{ margin: '15px 0' }} onClick={this.closeModal}>cancel</Button>
          </Modal>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Questions</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.listQuestion.map((item, index) => (
                  <tr key={ index }>
                    <td>{ index + 1 }</td>
                    <td>{ item.question}</td>
                    <td>{ item.type }</td>
                    <td>
                      <button onClick={() => this.openModal( 'editQuestion', item )}>Edit</button>
                      <button onClick={() => this.deleteQuestionClick(item.idQuestion)}>delete</button>
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
  listQuestion: state.listQuestion,
});

export default connect(mapStateToProps, { deleteQuestion })(Questions);
