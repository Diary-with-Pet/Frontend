import { call, put, takeLatest } from "redux-saga/effects";
import { loginTypes, loginActions } from "../modules/login";
import { customHistory as history } from "../store";

const callLogin = (data) => {
  throw Error;
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
