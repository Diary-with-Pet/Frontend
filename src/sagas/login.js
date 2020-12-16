import { takeEvery } from "redux-saga/effects";
import { loginTypes } from "../modules/login";
import { customHistory as history } from "../store";
function loginRequest(action) {
  console.log(action.data);
  localStorage.setItem("accessToken", action.data);
  history.push("/main");
}
const gotoRegister = (action) => {
  history.push("/register");
};

export default function* loginSaga() {
  yield takeEvery(loginTypes.LOGIN_REQUEST, loginRequest);
  yield takeEvery(loginTypes.GOTO_REGISTER, gotoRegister);
}
