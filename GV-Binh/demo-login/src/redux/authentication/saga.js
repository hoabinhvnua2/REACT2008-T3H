import { all, call, put, takeEvery, fork } from "redux-saga/effects";
import { userService } from "../../services/user.service";
import * as useAction from "./action";
import * as Type from "../action.constant";
import { history } from "../../helper/history";

function* actRequestLogin(params) {
  console.log(params);
  const model = params.user;

  const body = {
    userName: model.userName,
    password: model.password,
  };

  try {
    const response = yield call(
      () =>
        new Promise((resolve) => {
          userService.login(body).then((data) => resolve(data));
        })
    );
    if (response) {
      console.log("đã chạy vào đây");
      yield put(useAction.success(response));
      history.push("/");
    } else {
      yield put(useAction.failure());
    }
  } catch (error) {}
}

export function* watchLogin() {
  yield takeEvery(Type.LOGIN_REQUEST, actRequestLogin);
}

export default function* rootSaga() {
  yield all([fork(watchLogin)]);
}
