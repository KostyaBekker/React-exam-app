import {
  MYEXAM,
} from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const addPassExam = (passExam) => {
  // console.log(passExam);
  const valuePassExam = passExam;

  // const jsonPassExam = JSON.stringify(adddPassExam);
  // console.log('jsonAddExamInput:', jsonPassExam);

  return {
    type: MYEXAM,
    payload: valuePassExam
  };
};
