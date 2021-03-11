import { put, takeLatest, call } from "redux-saga/effects";
import { mypageTypes, mypageActions } from "modules/mypage";
import { getAccess } from "api/getRequest";

//getAccess.get("/mypage/list")
function* mypageRequest() {
  try {
    const { data } = yield call([getAccess(), "get"], "/mypage/list");
    yield put(mypageActions.mypageSuccess(data[0]));
  } catch (e) {
    yield put(mypageActions.mypageFailure("fail"));
  }
}

function* editRequest(action) {
  try {
    const { data } = yield call(
      [getAccess(), "patch"],
      `/mypage/update/${action.id}/`,
      action.data
    );
    yield put(mypageActions.editSuccess(data));
    yield put(mypageActions.mypageRequest());
  } catch (e) {
    yield put(mypageActions.editFailure(e));
  }
}

export default function* mypageSaga() {
  yield takeLatest(mypageTypes.MYPAGE_REQUEST, mypageRequest);
  yield takeLatest(mypageTypes.EDIT_REQUEST, editRequest);
}
