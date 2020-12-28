import {all} from 'redux-saga/effects';
import loginSaga from './authentication/saga';

export default function* rootSaga() {
    yield all([
        loginSaga()
    ]);
}