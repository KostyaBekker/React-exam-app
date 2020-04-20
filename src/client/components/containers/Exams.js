import React, { Component } from 'react';
import { Button, Table, Form } from 'react-bootstrap';
import Modal from 'react-modal';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AddEditExam from './modalPage/AddEditExam';
import { deleteExam } from '../../redux/actionsAdmin';
import { activeExam } from '../../redux/actionsAdmin';

import '../../app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Exams extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      modalIsType: '',
      exam: '',
      activeExam: 'false'
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = (type, item) => {
    this.setState({
      modalIsOpen: true,
      modalIsType: type,
      exam: item
    });
  }

  afterOpenModal() {
    this.subtitle.style.color = 'black';
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  deleteExamClick = (id) => {
    this.props.deleteExam(id);
  };

  activeExam = (activeExam, idActiveExam) => {
    // console.log(activeExam);
    if (activeExam) {
      this.setState({
        activeExam: 'true'
      });
    } else {
      this.setState({
        activeExam: 'false'
      });
    }
    this.props.activeExam(activeExam, idActiveExam);

  }

  render() {
    // console.log(this.props.listExams);
    return (
      <div className="table__wrap">
        <div className="header__table">
          <span><b>Exams</b></span>
          <Button variant="primary" type="submit" onClick={() => this.openModal('newExam')}>
            Add
          </Button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
          >
            <h2 ref={subtitle => this.subtitle = subtitle}> </h2>
            {this.state.modalIsType === 'newExam'
              ?
                <AddEditExam onClose={this.closeModal} examChange={'addExam'} />
              :
                <AddEditExam exam={this.state.exam} examChange={'editExam'} onClose={this.closeModal} />
            }
            <Button style={{ margin: '15px 0' }} onClick={this.closeModal}>cancel</Button>
          </Modal>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Date</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.listExams.map((item, index) => (
                  <tr key={ index } >
                    <td>{ index + 1 }</td>
                    <td>{ item.title}</td>
                    <td>{ item.date }</td>
                    <td>{ item.type }</td>
                    <td>
                      <div>
                        <Form>
                          <Form.Check
                            className="activeExam"
                            onChange={e => this.activeExam(e.target.checked, e.target.id)}
                            type="switch"
                            id={item.idExam}
                            label="active exam"
                          />
                        </Form>
                      </div>
                      <button onClick={() => this.openModal( 'editQuestion', item )}>Edit</button>
                      <button onClick={() => this.deleteExamClick(item.idExam)}>delete</button>
                      <Link to="/infoExam"><button>view result</button></Link>
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
  listExams: state.listExams,
});

export default connect(mapStateToProps, { deleteExam, activeExam })(Exams);
