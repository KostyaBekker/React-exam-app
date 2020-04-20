import { combineReducers } from 'redux';
import auth from './auth';
import listUsers from './listUsers';
import listQuestion from './listQuestion';
import listExams from './listExams';
import passExamList from './passExamList';

export default combineReducers({ auth, listUsers, listQuestion, listExams, passExamList });
