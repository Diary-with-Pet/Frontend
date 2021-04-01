import { put, takeLatest, call } from "redux-saga/effects";
import { diaryTypes, diaryActions } from "modules/diary";
import { getAccess } from "api";

function* requestList() {
  try {
    const { data } = yield call([getAccess(), "get"], "");
    yield put(diaryActions.requestSuccess(data));
  } catch (e) {
    yield put(
      diaryActions.requestFail("일기 목록을 불러오는 것을 실패하였습니다.")
    );
  }
}

function* requestDetail({ id }) {
  try {
    console.log(id);
    throw Error;
  } catch (e) {
    yield put(
      diaryActions.detailFail("일기 정보를 불러오는 것을 실패했습니다.")
    );
  }
}
function* createRequest({ data }) {
  try {
    yield call([getAccess(), "get"], "/diary/");
    yield put(diaryActions.createRequest());
  } catch (e) {
    yield put(
      diaryActions.requestFail("일기 목록을 불러오는 것을 실패하였습니다.")
    );
  }
}
export default function* diarySaga() {
  yield takeLatest(diaryTypes.REQUEST_LIST, requestList);
  yield takeLatest(diaryTypes.REQUEST_DETAIL, requestDetail);
  yield takeLatest(diaryTypes.CREATE_REQUEST, createRequest);
}
