import { call, put, takeLatest } from "redux-saga/effects";
import { loginTypes, loginActions } from "modules/login";
import axios from "axios";

function* loginRequest(action) {
  console.log("login");
  try {
    const client = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
    });
    const { data } = yield call([client, "post"], "user/login/", action.data);

    yield put(loginActions.loginSuccess(data.token));
  } catch (e) {
    yield put(loginActions.loginFailure());
  }
}

export default function* loginSaga() {
  yield takeLatest(loginTypes.LOGIN_REQUEST, loginRequest);
}
