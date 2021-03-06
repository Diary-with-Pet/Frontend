import { all, fork } from "redux-saga/effects";
import loginSaga from "./login";
import registerSaga from "./register";
import mypageSaga from "./mypage";
function* rootSaga() {
  yield all([fork(loginSaga), fork(registerSaga), fork(mypageSaga)]);
}
export default rootSaga;
