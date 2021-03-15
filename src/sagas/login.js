import { call, put, takeLatest } from "redux-saga/effects";
import { loginTypes, loginActions } from "modules/login";
import axios from "axios";

function* loginRequest(action) {
  try {
    const client = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
    });
    const { data } = yield call([client, "post"], "user/login/", action.data);
    yield put(loginActions.loginSuccess(data.token));
  } catch (e) {
    console.log(e);
    yield put(loginActions.loginFailure("로그인 실패"));
  }
}

export default function* loginSaga() {
  yield takeLatest(loginTypes.LOGIN_REQUEST, loginRequest);
}
