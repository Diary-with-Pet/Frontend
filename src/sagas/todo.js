import { call, takeLatest, put } from "redux-saga/effects";
import { getRequest } from "api/getRequest";

import { todoTypes, todoActions } from "modules/todo";

function* callList() {
  //   getRequest.get("/todo");
  //   yield put(todoActions.requestSuccess());
}
function* listRequest() {
  try {
    yield call(callList);
  } catch (e) {}
}

function* callDelete(action) {
  yield put(todoActions.deleteSuccess(action.id));
}
function* deleteRequest(action) {
  try {
    yield call(callDelete, action);
  } catch (e) {}
}

function* callEdit(action) {}

export default function* todoListSaga() {
  yield takeLatest(todoTypes.REQUEST_LIST, listRequest);
  yield takeLatest(todoTypes.DELETE_REQUEST, deleteRequest);
}
