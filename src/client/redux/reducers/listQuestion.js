import { LISTQUESTION, EDITQUESTION, DELETEQUESTION } from '../actionTypes';

const initialState = [

];

export default (state = initialState, action) => {
  switch (action.type) {
    case LISTQUESTION:
      // console.log(action.payload);
      state.push(action.payload);
      // console.log(state);
      return state;

    case EDITQUESTION:
      state.forEach((element, index) => {
        if (action.payload.idQuestion === element.idQuestion) {
          state[index] = action.payload;
        }
      });
      // console.log(state);
      return state;

    case DELETEQUESTION:
      state.forEach((element, index) => {
        if (action.payload.idQuestion === element.idQuestion) {
          state.splice(index, 1);
        }
      });
      return [...state];

    default:
      return state;
  }
};
