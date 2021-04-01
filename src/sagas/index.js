import { all, fork } from "redux-saga/effects";

import diarySaga from "sagas/diary";
function* rootSaga() {
  yield all([fork(diarySaga)]);
}
export default rootSaga;
