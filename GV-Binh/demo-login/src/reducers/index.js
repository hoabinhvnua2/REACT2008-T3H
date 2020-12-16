import { combineReducers } from 'redux';
import {registerReduce} from './register.reduce';
import {loginReduce} from './login.reduce';

export const rootReducer = combineReducers({
    registerReduce,
    loginReduce
});