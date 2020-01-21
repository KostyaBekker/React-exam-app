import { combineReducers } from 'redux';
import auth from './auth';
import listUsers from './listUsers';
import listQuestion from './listQuestion';

export default combineReducers({ auth, listUsers, listQuestion });
