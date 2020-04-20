import React, { Component } from 'react';
import { Button, Table, Form } from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPassExam } from '../../redux/ActionsUsers';

import '../../app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyExam extends Component {

  // componentDidMount = () => {
  //   const listExams = JSON.parse(localStorage.getItem('listExam'));
  // }
  passExamClick = (item) => {
    this.props.addPassExam(item);
  }
  

  exam = () => {
    const listExam = localStorage.getItem('listExam') || ('[]');
    const listExamArr = JSON.parse(listExam);

    // const activeExams = JSON.parse(localStorage.getItem('activeExam'));
    const activeExam = localStorage.getItem('activeExam') || ('[]');
    const activeExamArr = JSON.parse(activeExam);

    listExamArr.forEach((element, index) => {
      if (element.activeExam === true) {
        activeExamArr.push(listExamArr[index]);
      }
      return (
        localStorage.setItem('ActiveExam', JSON.stringify(activeExamArr))
      );
    });
    console.log(activeExamArr);
    return (
      activeExamArr.map((item, index) => (
        <tbody>
          <tr key={index}>
            <td>{ index + 1 }</td>
            <td>{ item.title}</td>
            <td>{ item.type }</td>
            <td>
              <button>view result</button>
              <Link to="/passExam">
                <button onClick={() => this.passExamClick(item)}>pass exam</button>
              </Link>
            </td>
          </tr>
        </tbody>
      ))
    );
  }

  render() {
    // console.log(this.props.listExams);
    // const listExams = this.props.listExams;
    return (
      <div className="table__wrap">
        <div className="header__table">
          <span><b>My Exam</b></span>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            {
              this.exam()
            }
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listExams: state.listExams,
});

export default connect(mapStateToProps, { addPassExam })(MyExam);
