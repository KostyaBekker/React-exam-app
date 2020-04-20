import { LISTEXAMS, DELETEEXAMS, EDITEXAMS, ACTIVEEXAM } from '../actionTypes';

const initialState = [

];

export default (state = initialState, action) => {
  switch (action.type) {
    case LISTEXAMS:
      // console.log(action.payload);
      state.push(action.payload);
      // localStorage.setItem('listExam', JSON.stringify(state));
      // console.log(state);
      return state;

    case EDITEXAMS:
      state.forEach((element, index) => {
        if (action.payload.idExam === element.idExam) {
          state[index] = action.payload;
        }
      });
      console.log(state);
      return state;

    case ACTIVEEXAM:
      state.forEach((element) => {
        if (action.payload.idActiveExam === element.idExam) {
          element.activeExam = action.payload.activeExam;
        }
      });
      console.log(state);
      return state;

    case DELETEEXAMS:
      state.forEach((element, index) => {
        if (action.payload.idQuestion === element.idQuestion) {
          state.splice(index, 1);
        }
      });
      console.log(state);
      return [...state];

    default:
      return state;
  }
};
