import { all, fork } from "redux-saga/effects";
import loginSaga from "./login";
import registerSaga from "./register";
import mypageSaga from "./mypage";
import todoListSaga from "./todo";
function* rootSaga() {
  yield all([
    fork(loginSaga),
    fork(registerSaga),
    fork(mypageSaga),
    fork(todoListSaga),
  ]);
}
export default rootSaga;
