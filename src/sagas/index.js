import { all, fork } from "redux-saga/effects";
import loginSaga from "./login";
import registerSaga from "./register";
import mypageSaga from "./mypage";
import todoListSaga from "./todo";
import mypetSaga from "./mypet";
import diarySaga from "sagas/diary";
function* rootSaga() {
  yield all([
    fork(loginSaga),
    fork(registerSaga),
    fork(mypageSaga),
    fork(todoListSaga),
    fork(mypetSaga),
    fork(diarySaga),
  ]);
}
export default rootSaga;
