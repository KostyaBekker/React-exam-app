import { LISTUSERS, EDITUSER, DELETEUSER } from '../actionTypes';

const initialState = [

];

export default (state = initialState, action) => {
  switch (action.type) {
    case LISTUSERS:
      // console.log(action.payload);
      state.push(action.payload);
      // console.log(state);
      return state;

    case EDITUSER:
      // console.log(action.payload, state);
      state.forEach((element, index) => {
        if (action.payload.valueId === element.valueId) {
          state[index] = action.payload;
        }
      });
      // console.log(state);
      return state;

    case DELETEUSER:
      state.forEach((element, index) => {   
        if (action.payload.idUser === element.idUser) {
          state.splice(index, 1);
        }
      });
      // console.log(state);
      return [...state];

    default:
      return state;
  }
};
