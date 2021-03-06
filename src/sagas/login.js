import { call, put, takeLatest } from "redux-saga/effects";
import { loginTypes, loginActions } from "../modules/login";

const callLogin = (data) => {
  throw Error;
  localStorage.setItem("accessToken", "");
};
function* loginRequest(action) {
  console.log("login");
  try {
    yield call(callLogin, action.data);
    yield put(loginActions.loginSuccess());
  } catch (e) {
    yield put(loginActions.loginFailure());
  }
}

export default function* loginSaga() {
  yield takeLatest(loginTypes.LOGIN_REQUEST, loginRequest);
}
