import React, { Component } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { editQuestion } from '../../../redux/actions';

import '../../../app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line react/prefer-stateless-function
class EditQuestion extends Component {
  constructor(props) {
    super(props);
    // console.log(props.question.answers[0].text);
    this.state = {
      inputType: props.question.type,
      inputQuestion: props.question.question,
      inputSection: props.question.section,
      inputGroup: props.question.group,
      inputAnswer1: props.question.answers[0].text,
      inputAnswer2: props.question.answers[1].text,
      inputAnswer3: props.question.answers[2].text,
      inputAnswer4: props.question.answers[3].text,
      inputAnswerValue: props.question.answers.findIndex(item => item.correct === true),
      inputAnswers: []
    };
  }

  updateType = (inputType) => {
    document.querySelector('.isValid').classList.remove('isValidStyle');
    this.setState({ inputQuestion: '' });
    this.setState({ inputType });
  };

  updateQuestion = (inputQuestion) => {
    document.querySelector('.isValid').classList.remove('isValidStyle');
    this.setState({ inputQuestion });
  };

  updateSection = (inputSection) => {
    this.setState({ inputGroup: '' });
    this.setState({ inputSection });
  };

  updateGroup = (inputGroup) => {
    this.setState({ inputGroup });
  };

  updateAnswer = (key, value) => {
    this.setState({ [key]: value });
  };

  updateAnswerValue = (inputAnswerValue) => {
    this.setState({ inputAnswerValue });
  };

  renderType = (inputType, inputQuestion) => {
    if (inputType === 'text') {
      return (
        <div>
          <textarea
            className="isValid"
            onChange={e => this.updateQuestion(e.target.value)}
            value={inputQuestion}
            placeholder="Qestion"
            style={{ width: '70%' }}
          />
        </div>
      );
    }
    if (inputType === 'photo') {
      return (
        <input
          className="isValid"
          type="url"
          name="url"
          onChange={e => this.updateQuestion(e.target.value)}
          value={inputQuestion}
          placeholder="https://example.com"
          pattern="https://.*"
          size="30"
          required
        />
      );
    }
    if (inputType === 'video') {
      return (
        <input
          className="isValid"
          type="url"
          name="url"
          onChange={e => this.updateQuestion(e.target.value)}
          value={inputQuestion}
          placeholder="https://www.youtube.com/"
          pattern="https://www.youtube.com/"
          size="30"
          required
        />
      );
    }
    return null;
  };

  renderSectionGroup = (inputSection, inputGroup) => {
    if (inputSection === 'sport') {
      return (
        <Form.Group
          onChange={e => this.updateGroup(e.target.id)}
          id={inputGroup}
        >
          <Form.Label>
            Group
          </Form.Label>
          <Form.Check
            type="radio"
            label="A"
            name="inputSportG"
            id="A"
            defaultChecked={inputGroup === 'A'}
          />
          <Form.Check
            type="radio"
            label="B"
            name="inputSportG"
            id="B"
            defaultChecked={inputGroup === 'B'}
          />
          <Form.Check
            type="radio"
            label="C"
            name="inputSportG"
            id="C"
            defaultChecked={inputGroup === 'C'}
          />
        </Form.Group>
      );
    }
    if (inputSection === 'traditional') {
      return (
        <Form.Group
          onChange={e => this.updateGroup(e.target.id)}
          id={inputGroup}
        >
          <Form.Label>
            Group
          </Form.Label>
          <Form.Check
            type="radio"
            label="A"
            name="TraditionalG"
            id="A"
            defaultChecked={inputGroup === 'A'}
          />
          <Form.Check
            type="radio"
            label="B"
            name="TraditionalG"
            id="B"
            defaultChecked={inputGroup === 'B'}
          />
        </Form.Group>
      );
    }
    if (inputSection === 'syanshow') {
      return (
        <Form.Group
          onChange={e => this.updateGroup(e.target.id)}
          id={inputGroup}
        >
          <Form.Label>
            Group
          </Form.Label>
          <Form.Check
            type="radio"
            label="SangDa"
            name="inputSyanshowG"
            id="SangDa"
            defaultChecked={inputGroup === 'SangDa'}
          />
          <Form.Check
            type="radio"
            label="XingDa"
            name="inputSyanshowG"
            id="XingDa"
            defaultChecked={inputGroup === 'XingDa'}
          />
          <Form.Check
            type="radio"
            label="TuiShow"
            name="inputSyanshowG"
            id="TuiShow"
            defaultChecked={inputGroup === 'TuiShow'}
          />
          <Form.Check
            type="radio"
            label="VingChung"
            name="inputSyanshowG"
            id="VingChung"
            defaultChecked={inputGroup === 'VingChung'}
          />
        </Form.Group>
      );
    }
    return null;
  };

  isValid = () => {
    const valid = document.querySelector('.isValid');
    const { inputType, inputQuestion } = this.state;
    if (
      (inputType === 'text' && inputQuestion)
      || (inputType === 'photo' && inputQuestion)
      || (inputType === 'video' && (inputQuestion.includes('youtube.com') || inputQuestion.includes('youtu.be')))
    ) {
      return true;
    }
    valid.classList.add('isValidStyle');
    return false;
  }

  editQuestion = () => {
    const { inputType, inputQuestion, inputSection, inputGroup } = this.state;
    const { inputAnswer1, inputAnswer2, inputAnswer3, inputAnswer4, inputAnswerValue } = this.state;
    const inputAnswers = [
      {
        text: inputAnswer1,
        correct: inputAnswerValue === 'true1',
      },
      {
        text: inputAnswer2,
        correct: inputAnswerValue === 'true2',
      },
      {
        text: inputAnswer3,
        correct: inputAnswerValue === 'true3',
      },
      {
        text: inputAnswer4,
        correct: inputAnswerValue === 'true4',
      }
    ];
    const valueIdQuestion = this.props.question.idQuestion;
    if (this.isValid()) {
      this.props.editQuestion(
        inputType,
        inputQuestion,
        inputSection,
        inputGroup,
        inputAnswers,
        valueIdQuestion
      );
      this.props.onClose();
    }
  };

  render() {
    const {
      inputType,
      inputQuestion,
      inputSection,
      inputGroup,
      inputAnswerValue,
      inputAnswer1,
      inputAnswer2,
      inputAnswer3,
      inputAnswer4
    } = this.state;
    return (
      <div>
        <h2><b>Edit Question</b></h2>
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
              label="text"
              name="Type"
              id="text"
              defaultChecked={inputType === 'text'}
            />
            <Form.Check
              type="radio"
              label="photo"
              name="Type"
              id="photo"
              defaultChecked={inputType === 'photo'}
            />
            <Form.Check
              type="radio"
              label="video"
              name="Type"
              id="video"
              defaultChecked={inputType === 'video'}
            />
          </Form.Group>
          {
            this.renderType(inputType, inputQuestion)
          }
        </Form>
        <Form>
          <Form.Group
            onChange={e => this.updateSection(e.target.id)}
            id={inputSection}
          >
            <Form.Label>
              Section
            </Form.Label>
            <Form.Check
              type="radio"
              label="sport"
              name="Section"
              id="sport"
              defaultChecked={inputSection === 'sport'}
            />
            <Form.Check
              type="radio"
              label="traditional"
              name="Section"
              id="traditional"
              defaultChecked={inputSection === 'traditional'}
            />
            <Form.Check
              type="radio"
              label="syanshow"
              name="Section"
              id="syanshow"
              defaultChecked={inputSection === 'syanshow'}
            />
          </Form.Group>
          {
            this.renderSectionGroup(inputSection, inputGroup)
          }
        </Form>
        <Form>
          <Form.Group
            onChange={e => this.updateAnswerValue(e.target.id)}
            id={inputAnswerValue}
          >
            <Table bordered size="sm" style={{ width: '70%' }}>
              <thead>
                <tr>
                  <th style={{ width: '90%' }}>Answers</th>
                  <th style={{ width: '10%' }}>Correct</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form.Control
                      onChange={e => this.updateAnswer('inputAnswer1', e.target.value)}
                      value={inputAnswer1}
                      type="text"
                      placeholder="Answer"
                    />
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      name="Answer"
                      id="true1"
                      defaultChecked={inputAnswerValue === 0}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      onChange={e => this.updateAnswer('inputAnswer2', e.target.value)}
                      value={inputAnswer2}
                      type="text"
                      placeholder="Answer"
                    />
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      name="Answer"
                      id="true2"
                      defaultChecked={inputAnswerValue === 1}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      onChange={e => this.updateAnswer('inputAnswer3', e.target.value)}
                      value={inputAnswer3}
                      type="text"
                      placeholder="Answer"
                    />
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      name="Answer"
                      id="true3"
                      defaultChecked={inputAnswerValue === 2}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control
                      onChange={e => this.updateAnswer('inputAnswer4', e.target.value)}
                      value={inputAnswer4}
                      type="text"
                      placeholder="Answer"
                    />
                  </td>
                  <td>
                    <Form.Check
                      type="radio"
                      name="Answer"
                      id="true4"
                      defaultChecked={inputAnswerValue === 3}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Form.Group>
        </Form>
        <Button onClick={() => this.editQuestion()}>
        edit
        </Button>
      </div>
    );
  }
}

export default connect(
  null,
  { editQuestion }
)(EditQuestion);
