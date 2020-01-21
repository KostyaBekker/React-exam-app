import { LOGIN, LOGOUT } from '../actionTypes';

let initialState = {

};

if (localStorage.getItem('saveUser')) {
  initialState = JSON.parse(localStorage.getItem('saveUser'));
}
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      // console.log('reduser', action.payload);
      return action.payload;
    }
    case LOGOUT: {
      localStorage.setItem('saveUser', '');
      return {};
    }
    default:
      return state;
  }
};
