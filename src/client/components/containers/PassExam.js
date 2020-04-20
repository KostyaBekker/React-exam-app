import React, { Component } from 'react';
import { Button, Table, Form } from 'react-bootstrap';
// import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import '../../app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class MyExam extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      date: '',
      type: '',
      questionsNumber: ''
    };
  }

  componentDidMount = () => {
    this.props.passExamList.map((item, index) => (
      this.setState({
        title: item.title,
        type: item.type,
        date: item.date,
        questionsNumber: item.questionsNumber
      })
    ));
  };

  itemQuestion = (indexClick) => {
    const pass = document.querySelectorAll('.question_exam_user');
    pass.forEach((element, index) => {
      if (indexClick === index) {
        pass[index].classList.add('question_exam_user__pass');
      }
    });
  };

  render() {
    console.log(this.state.title, this.state.date, this.state.type, this.state.questionsNumber);
    const examUser = [
      {number: '1', id: '1'},
      {number: '2', id: '2'},
      {number: '3', id: '3'},
      {number: '4', id: '4'},
      {number: '5', id: '5'},
      {number: '6', id: '6'},
      {number: '7', id: '7'},
      {number: '8', id: '8'},
      {number: '9', id: '9'},
      {number: '10', id: '10'},
      {number: '11', id: '11'},
      {number: '12', id: '12'},
      {number: '13', id: '13'},
      {number: '14', id: '14'},
      {number: '15', id: '15'},
    ];
    // console.log(examUser);
    return (
      <div className="table__wrap">
        <div className="header__table">
          <span><b>Pass Exam</b></span>
        </div>
        <div className="header__table">
          <span><b>{this.state.title}</b></span>
        </div>
        <div className="header__table">
          <span>Количество вопросов: {this.state.questionsNumber}</span>
        </div>
        <div className='pass_exam_wrap'>
          {
            examUser.map((item, index) => (
              <button
                className='question_exam_user'
                onClick={() => this.itemQuestion(index)}
              >
                {index + 1}
              </button>
            ))
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  passExamList: state.passExamList,
});

export default connect(mapStateToProps, { })(MyExam);
