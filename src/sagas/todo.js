import { call, takeLatest, put } from "redux-saga/effects";
import { getAccess } from "api/getRequest";

import { todoTypes, todoActions } from "modules/todo";

function* listRequest() {
  try {
    const { data } = yield call([getAccess(), "get"], "/todo");
    yield put(todoActions.requestSuccess(data));
  } catch (e) {}
}

function* deleteRequest(action) {
  console.log(action);
  try {
    yield call([getAccess(), "delete"], `todo/${action.id}`);
    yield put(todoActions.deleteSuccess(action.id));
  } catch (e) {}
}

function* editRequest(action) {
  console.log(action);
  try {
    yield call([getAccess(), "patch"], `/todo/${action.id}/`, action.data);
    yield put(
      todoActions.editSuccess({
        id: action.id,
        ...action.data,
      })
    );
  } catch (e) {}
}

function* createRequest(action) {
  try {
    yield call([getAccess(), "post"], "/todo/", action.data);
    yield put(todoActions.createSuccess(action.data));
  } catch (e) {}
}

export default function* todoListSaga() {
  yield takeLatest(todoTypes.REQUEST_LIST, listRequest);
  yield takeLatest(todoTypes.DELETE_REQUEST, deleteRequest);
  yield takeLatest(todoTypes.EDIT_REQUEST, editRequest);
  yield takeLatest(todoTypes.CREATE_REQUEST, createRequest);
}
