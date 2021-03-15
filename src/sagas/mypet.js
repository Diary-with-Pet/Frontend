import { put, takeLatest, call } from "redux-saga/effects";
import { mypetTypes, mypetActions } from "modules/mypet";
import { getAccess } from "api/getRequest";

function* listRequest() {
  try {
    const { data } = yield call([getAccess(), "get"], "/mypet");
    yield put(mypetActions.listRequestSuccess(data));
  } catch (e) {
    yield put(
      mypetActions.listRequestFail("펫 목록을 불러오는데 실패하였습니다")
    );
  }
}
function* createRequest({ data }) {
  try {
    yield call([getAccess(), "post"], "/mypet/", data);
    yield put(mypetActions.createSuccess());
  } catch (e) {
    mypetActions.createFail("새 펫 정보 갱신에 실패하였습니다");
  }
}
function* editRequest({ data, id }) {
  try {
    yield call([getAccess(), "patch"], `/mypet/${id}/`, data);
    yield put(mypetActions.editSuccess());
  } catch (e) {
    mypetActions.editFail("펫 정보 수정에 실패했습니다");
  }
}
function* deleteRequest({ id }) {
  try {
    yield call([getAccess(), "delete"], `/mypet/${id}/`);
    yield put(mypetActions.editSuccess());
  } catch (e) {
    mypetActions.deleteFail("펫 목록 삭제에 실패했습니다");
  }
}

function* mypetSaga() {
  yield takeLatest(mypetTypes.LIST_REQUEST, listRequest);
  yield takeLatest(mypetTypes.CREATE_REQUEST, createRequest);
  yield takeLatest(mypetTypes.EDIT_REQUEST, editRequest);
  yield takeLatest(mypetTypes.DELETE_REQUEST, deleteRequest);
}

export default mypetSaga;
