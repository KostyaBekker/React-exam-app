import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import '../../app.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class InfoExam extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div className="table__wrap">
        <div className="header__table">
          <span><b>Info Exam</b></span>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>ФИО</th>
                <th>Результат</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td><button>Подробная информация</button> </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}


export default connect( null, { })(InfoExam);
