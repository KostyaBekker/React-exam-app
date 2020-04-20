import { MYEXAM } from '../actionTypes';

const initialState = [

];

export default (state = initialState, action) => {
  switch (action.type) {
    case MYEXAM:
      // console.log(action.payload);
      state.push(action.payload);
      // localStorage.setItem('listExam', JSON.stringify(state));
      console.log(action.payload);
      return state;

    default:
      return state;
  }
};