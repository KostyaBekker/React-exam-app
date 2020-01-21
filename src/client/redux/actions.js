import { LOGIN, LOGOUT, LISTUSERS, EDITUSER, DELETEUSER, LISTQUESTION, EDITQUESTION, DELETEQUESTION } from './actionTypes';

// eslint-disable-next-line no-shadow
export const login = (login, password) => {
  // console.log(login, password);

  const userInput = {
    valueLogin: login,
    valuePassword: password
  };

  const jsonLogin = JSON.stringify(userInput);
  console.log(jsonLogin);

  const user = {
    name: 'Kostya',
    type: 'admin'
  };
  localStorage.setItem('saveUser', JSON.stringify(user));
  return {
    type: LOGIN,
    payload: user
  };
};
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
export const addUser = (inputEmail, inputName, inputRole, inputPassword) => {
  // console.log(inputEmail, inputName, inputRole, inputPassword);
  const createRid = () => {
    const min = 1;
    const max = 100000;
    const time = new Date().getTime();
    const random = Math.random() * (max - min) + min;
    return `${time}_${random}`;
  };

  const addUserInput = {
    valueEmail: inputEmail,
    valueName: inputName,
    valueRole: inputRole,
    valuePassword: inputPassword,
    valueId: createRid()
  };

  const jsonAddUser = JSON.stringify(addUserInput);
  console.log(jsonAddUser);

  return {
    type: LISTUSERS,
    payload: addUserInput
  };
};
export const editUser = (inputEmail, inputName, inputRole, inputPassword, valueId) => {
  const editUserInput = {
    valueEmail: inputEmail,
    valueName: inputName,
    valueRole: inputRole,
    valuePassword: inputPassword,
    valueId: valueId
  };

  const jsonEditUser = JSON.stringify(editUserInput);
  console.log(jsonEditUser);

  return {
    type: EDITUSER,
    payload: editUserInput
  };
};
export const deleteUser = (valueId) => {
  const valueIdUser = {
    idUser: valueId
  };
  return {
    type: DELETEUSER,
    payload: valueIdUser
  };
};

export const addQuestion = (inputType, inputQuestion, inputSection, inputGroup, inputAnswers) => {
  const createRid = () => {
    const min = 1;
    const max = 100000;
    const time = new Date().getTime();
    const random = Math.random() * (max - min) + min;
    return `${time}_${random}`;
  };

  const addQuestionInput = {
    type: inputType,
    question: inputQuestion,
    section: inputSection,
    group: inputGroup,
    answers: inputAnswers,
    idQuestion: createRid()
  };

  const jsonAddQuestion = JSON.stringify(addQuestionInput);
  console.log('jsonAddQuestion:', jsonAddQuestion);

  return {
    type: LISTQUESTION,
    payload: addQuestionInput
  };
};
export const editQuestion = (
  inputType,
  inputQuestion, inputSection,
  inputGroup,
  inputAnswers,
  valueIdQuestion
) => {
  const editQuestionInput = {
    type: inputType,
    question: inputQuestion,
    section: inputSection,
    group: inputGroup,
    answers: inputAnswers,
    idQuestion: valueIdQuestion
  };

  const jsonEditQuestion = JSON.stringify(editQuestionInput);
  console.log('jsonEditQuestion:', jsonEditQuestion);

  return {
    type: EDITQUESTION,
    payload: editQuestionInput
  };
};
export const deleteQuestion = (valueIdQuestion) => {
  const idQuestion = {
    idQuestion: valueIdQuestion
  };
  return {
    type: DELETEQUESTION,
    payload: idQuestion
  };
};
