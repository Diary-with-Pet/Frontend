import { all, fork } from "redux-saga/effects";
import loginSaga from "./login";
import registerSaga from "./register";
function* rootSaga() {
  yield all([fork(loginSaga), fork(registerSaga)]);
}
export default rootSaga;
