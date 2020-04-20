import {
  LOGIN,
  LOGOUT,
  LISTUSERS,
  EDITUSER,
  DELETEUSER,
  LISTQUESTION,
  EDITQUESTION,
  DELETEQUESTION,
  LISTEXAMS,
  DELETEEXAMS,
  EDITEXAMS,
  ACTIVEEXAM
} from './actionTypes';

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

export const addExam = (
  nameExam,
  dateExam,
  inputType,
  numberQuestions,
  sport,
  tradition) => {

  const createRid = () => {
    const min = 1;
    const max = 100000;
    const time = new Date().getTime();
    const random = Math.random() * (max - min) + min;
    return `${time}_${random}`;
  };

  const addExamInput = {
    title: nameExam,
    date: dateExam,
    type: inputType,
    questionsNumber: numberQuestions,
    sport: sport,
    tradition: tradition,
    idExam: createRid(),
    activeExam: false
  };

  // const jsonAddExamInput = JSON.stringify(addExamInput);
  // console.log('jsonAddExamInput:', jsonAddExamInput);
  const listExam = localStorage.getItem('listExam') || ('[]');
  // console.log(listExam);
  const listExamArr = JSON.parse(listExam);
  listExamArr.push(addExamInput);
  localStorage.setItem('listExam', JSON.stringify(listExamArr));

  return {
    type: LISTEXAMS,
    payload: addExamInput
  };
};

export const editExam = (
  nameExam,
  dateExam,
  inputType,
  numberQuestions,
  sport,
  tradition,
  idExam,
  activeExam
) => {
  const editExamInput = {
    title: nameExam,
    date: dateExam,
    type: inputType,
    questionsNumber: numberQuestions,
    sport: sport,
    tradition: tradition,
    idExam: idExam,
    activeExam: activeExam
  };
  // const jsonEditExamInput = JSON.stringify(editExamInput);
  // console.log('jsonEditExamInput:', jsonEditExamInput);
  const listExam = localStorage.getItem('listExam') || ('[]');
  const listExamArr = JSON.parse(listExam);
  // console.log(idExam);
  listExamArr.forEach((element, index) => {
    if (idExam === element.idExam) {
      listExamArr.splice(index, 1);
      listExamArr[index] = editExamInput;
      // console.log(element.idExam);
    }
    return (
      localStorage.setItem('listExam', JSON.stringify(listExamArr))
    );
  });

  return {
    type: EDITEXAMS,
    payload: editExamInput
  };
};

export const deleteExam = (valueIdExams) => {
  const idExams = {
    idExams: valueIdExams
  };

  const listExam = localStorage.getItem('listExam');
  const listExamArr = JSON.parse(listExam);

  listExamArr.forEach((element, index) => {
    if (idExams.idExams === element.idExam) {
      listExamArr.splice(index, 1);
    }
    return (
      localStorage.setItem('listExam', JSON.stringify(listExamArr))
    );
  });

  return {
    type: DELETEEXAMS,
    payload: idExams
  };
};

export const activeExam = (activeExam, idActiveExam) => {
  const activeExamChange = {
    activeExam: activeExam,
    idActiveExam: idActiveExam
  };

  // const jsonActiveExamChange = JSON.stringify(activeExamChange);
  // console.log('jsonAddExamInput:', jsonActiveExamChange);
  const listExam = localStorage.getItem('listExam') || ('[]');
  const listExamArr = JSON.parse(listExam);
  // console.log(idExam);
  listExamArr.forEach((element) => {
    if (idActiveExam === element.idExam) {
      element.activeExam = activeExam;
      // console.log(element.idExam);
    }
    return (
      localStorage.setItem('listExam', JSON.stringify(listExamArr))
    );
  });
  return {
    type: ACTIVEEXAM,
    payload: activeExamChange
  };
};
