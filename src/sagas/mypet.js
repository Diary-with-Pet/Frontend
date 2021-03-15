import { put, takeLatest, call } from "redux-saga/effects";
import { mypetTypes, mypetActions } from "modules/mypet";
import { getAccess } from "api/getRequest";

function* listRequest() {
  try {
    const { data } = yield call([getAccess(), "get"], "/mypet");
    yield put(mypetActions.listRequestSuccess(data));
  } catch (e) {}
}
function* createRequest({ data }) {
  try {
    yield call([getAccess(), "post"], "/mypet/", data);
    yield put(mypetActions.createSuccess());
  } catch (e) {}
}
function* editRequest({ data, id }) {
  try {
    yield call([getAccess(), "patch"], `/mypet/${id}/`, data);
    yield put(mypetActions.editSuccess());
  } catch (e) {}
}
function* deleteRequest({ id }) {
  try {
    yield call([getAccess(), "delete"], `/mypet/${id}/`);
    yield put(mypetActions.editSuccess());
  } catch (e) {}
}

function* mypetSaga() {
  yield takeLatest(mypetTypes.LIST_REQUEST, listRequest);
  yield takeLatest(mypetTypes.CREATE_REQUEST, createRequest);
  yield takeLatest(mypetTypes.EDIT_REQUEST, editRequest);
  yield takeLatest(mypetTypes.DELETE_REQUEST, deleteRequest);
}

export default mypetSaga;
