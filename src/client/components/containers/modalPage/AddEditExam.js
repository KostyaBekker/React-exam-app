import React, { Component } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addExam } from '../../../redux/actionsAdmin';
import { editExam } from '../../../redux/actionsAdmin';
import '../../../app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line react/prefer-stateless-function
class AddExam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameExam: '',
      dateExam: '',
      numberQuestions: '',
      inputType: 'sport',
      sportANumber: '',
      sportBNumber: '',
      sportCNumber: '',
      traditionANumber: '',
      traditionBNumber: ''
    };
  };

  componentWillMount = () => {
    if (this.props.examChange == 'editExam') {
      return (
        this.setState({ 
          nameExam: this.props.exam.title,
          dateExam: this.props.exam.date,
          numberQuestions: this.props.exam.questionsNumber,
          inputType: this.props.exam.type,
          sportANumber: this.props.exam.sport.a,
          sportBNumber: this.props.exam.sport.b,
          sportCNumber: this.props.exam.sport.c,
          traditionANumber: this.props.exam.tradition.a,
          traditionBNumber: this.props.exam.tradition.b
        })
      );
    };
  }

  updateNameExam = (nameExam) => {
    this.setState({ nameExam });
  };

  updateDateExam = (dateExam) => {
    this.setState({ dateExam });
  };

  updateNumberQuestions = (numberQuestions) => {
    document.querySelector('.isValid').classList.remove('isValidStyle');
    document.getElementById('fewQuestions').innerText = '';
    this.setState({ numberQuestions });
  };

  updateSportANumber = (sportANumber) => {
    document.querySelector('.isValid').classList.remove('isValidStyle');
    document.getElementById('fewQuestions').innerText = '';
    this.setState({ sportANumber });
  };

  updateSportBNumber = (sportBNumber) => {
    document.querySelector('.isValid').classList.remove('isValidStyle');
    document.getElementById('fewQuestions').innerText = '';
    this.setState({ sportBNumber });
  };

  updateSportCNumber = (sportCNumber) => {
    document.querySelector('.isValid').classList.remove('isValidStyle');
    document.getElementById('fewQuestions').innerText = '';
    this.setState({ sportCNumber });
  };

  updateTraditionANumber = (traditionANumber) => {
    document.querySelector('.isValid').classList.remove('isValidStyle');
    document.getElementById('fewQuestions').innerText = '';
    this.setState({ traditionANumber });
  };

  updateTraditionBNumber = (traditionBNumber) => {
    document.querySelector('.isValid').classList.remove('isValidStyle');
    document.getElementById('fewQuestions').innerText = '';
    this.setState({ traditionBNumber });
  };

  updateType = (inputType) => {
    this.setState({ inputType });
  };

  renderType = (
    inputType,
    sportANumber,
    sportBNumber,
    sportCNumber,
    traditionANumber,
    traditionBNumber
  ) => {
    if (inputType === 'sport') {
      return (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th colSpan="2">Sport</th>
                <th colSpan="2">Tradition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>group</td>
                <td>number</td>
                <td>group</td>
                <td>number</td>
              </tr>
              <tr>
                <td>a</td>
                <td>
                  <input
                    className="isValid"
                    type="number"
                    name="sportANumber "
                    onChange={e => this.updateSportANumber (e.target.value)}
                    value={sportANumber}
                  />
                </td>
                <td>a</td>
                <td>
                  <input
                    className="isValid"
                    type="number"
                    name="traditionANumber "
                    onChange={e => this.updateTraditionANumber (e.target.value)}
                    value={traditionANumber}
                  />
                </td>
              </tr>
              <tr>
                <td>b</td>
                <td>
                  <input
                    className="isValid"
                    type="number"
                    name="sportBNumber "
                    onChange={e => this.updateSportBNumber (e.target.value)}
                    value={sportBNumber}
                  />
                </td>
                <td>b</td>
                <td>
                  <input
                    className="isValid"
                    type="number"
                    name="TraditionBNumber "
                    onChange={e => this.updateTraditionBNumber (e.target.value)}
                    value={traditionBNumber}
                  />
                </td>
              </tr>
              <tr>
                <td>c</td>
                <td>
                  <input
                    className="isValid"
                    type="number"
                    name="sportCNumber "
                    onChange={e => this.updateSportCNumber (e.target.value)}
                    value={sportCNumber}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      );
    }
    if (inputType === 'contact') {
      return (
        <div>
          <span style={{ color: 'red', fontSize: '25px' }}>
            Sorry, not available.
          </span>
        </div>
      );
    }
    return null;
  };

  isValid = () => {
    const valid = document.querySelector('.isValid');
    const { numberQuestions, sportANumber, sportBNumber, sportCNumber, traditionANumber, traditionBNumber } = this.state;
    const allNumber = (Number(sportANumber))
    + (Number(sportBNumber))
    + (Number(sportCNumber))
    + (Number(traditionANumber))
    + (Number(traditionBNumber));
    if ((allNumber == numberQuestions) && (numberQuestions !== '')) {
      return true;
    }
    valid.classList.add('isValidStyle');
    document.getElementById('fewQuestions').innerText = 'Few Questions';
    return false;
  };

  typePageName = () => {
    if (this.props.examChange == 'editExam') {
      return (<h2><b>Edit Exam</b></h2>);
    }
    return (<h2><b>Add Exam</b></h2>);
  }

  typeButton = (
    nameExam,
    dateExam,
    inputType,
    numberQuestions,
    sportANumber,
    sportBNumber,
    sportCNumber,
    traditionANumber,
    traditionBNumber) => {
    if (this.props.examChange == 'editExam') {
      return (
        <Button onClick={() => this.editExam()}>
        edit
        </Button>
      );
    }
    return (
      <Button onClick={() => this.addExam(
        nameExam,
        dateExam,
        inputType,
        numberQuestions,
        sportANumber,
        sportBNumber,
        sportCNumber,
        traditionANumber,
        traditionBNumber
      )}
      >
      add to list
      </Button>
    );
  }

  addExam = (
    nameExam,
    dateExam,
    inputType,
    numberQuestions,
    sportANumber,
    sportBNumber,
    sportCNumber,
    traditionANumber,
    traditionBNumber
  ) => {
    const sport = {
      'a': sportANumber,
      'b': sportBNumber,
      'c': sportCNumber
    };
    const tradition = {
      'a': traditionANumber,
      'b': traditionBNumber
    };
    if (this.isValid()) {
      this.props.addExam(
        nameExam,
        dateExam,
        inputType,
        numberQuestions,
        sport,
        tradition,
      );
      this.props.onClose();
    }
  };

  editExam = () => {
    const {
      nameExam,
      dateExam,
      numberQuestions,
      inputType,
      sportANumber,
      sportBNumber,
      sportCNumber,
      traditionANumber,
      traditionBNumber
    } = this.state;
    const idExam = this.props.exam.idExam;
    const activeExam = this.props.exam.activeExam;
    const sport = {
      'a': sportANumber,
      'b': sportBNumber,
      'c': sportCNumber
    };
    const tradition = {
      'a': traditionANumber,
      'b': traditionBNumber
    };
    if (this.isValid()) {
      this.props.editExam(
        nameExam,
        dateExam,
        inputType,
        numberQuestions,
        sport,
        tradition,
        idExam,
        activeExam
      );
      this.props.onClose();
    }
  };

  render() {
    const {
      nameExam,
      dateExam,
      numberQuestions,
      inputType,
      sportANumber,
      sportBNumber,
      sportCNumber,
      traditionANumber,
      traditionBNumber,
    } = this.state;
    // console.log(nameExam, dateExam, numberQuestions, sportANumber, sportBNumber,
    //   sportCNumber,
    //   traditionANumber,
    //   traditionBNumber);

    return (
      <div>
        {
          this.typePageName()
        }
        <Form>
          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              onChange={e => this.updateNameExam(e.target.value)}
              value={nameExam}
              type="text"
              placeholder="Name Exam"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date:</Form.Label>
            <Form.Control
              onChange={e => this.updateDateExam(e.target.value)}
              value={dateExam}
              type="date"
              placeholder="Date"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Number of Questions:</Form.Label>
            <Form.Control
              className="isValid"
              onChange={e => this.updateNumberQuestions(e.target.value)}
              value={numberQuestions}
              type="number"
              placeholder="Number of Questions"
            />
          </Form.Group>
          <div>
            <span id='fewQuestions' style = {{ fontSize: '20px', color: 'red' }}></span>
          </div>
        </Form>
        <Form>
          <Form.Group
            onChange={e => this.updateType(e.target.id)}
            id={inputType}
          >
            <Form.Label>
              Type
            </Form.Label>
            <Form.Check
              type="radio"
              label="sport"
              name="Type"
              id="sport"
              defaultChecked={inputType === 'sport'}
            />
            <Form.Check
              type="radio"
              label="contact"
              name="Type"
              id="contact"
            />
          </Form.Group>
          {
            this.renderType(
              inputType,
              sportANumber,
              sportBNumber,
              sportCNumber,
              traditionANumber,
              traditionBNumber
            )
          }
        </Form>
        {
          this.typeButton(nameExam,
            dateExam,
            inputType,
            numberQuestions,
            sportANumber,
            sportBNumber,
            sportCNumber,
            traditionANumber,
            traditionBNumber)
        }
      </div>
    );
  }
}

export default connect(
  null,
  { addExam, editExam }
)(AddExam);
