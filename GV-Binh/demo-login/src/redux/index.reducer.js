import { combineReducers } from 'redux';
// import {registerReduce} from './register.reduce';
import { loginReduce } from './authentication/reducer';

export const rootReducer = combineReducers({
    // registerReduce,
    loginReduce,
    // loginFaceReduce
});