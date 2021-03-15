import { put, takeLatest, call } from "redux-saga/effects";
import { mypageTypes, mypageActions } from "modules/mypage";
import { getAccess } from "api/getRequest";

//getAccess.get("/mypage/list")
function* mypageRequest() {
  try {
    const { data } = yield call([getAccess(), "get"], "/mypage/list");
    yield put(mypageActions.mypageSuccess(data[0]));
  } catch (e) {
    yield put(
      mypageActions.mypageFailure("마이페이지 불러오기에 실패했습니다.")
    );
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
    yield put(mypageActions.editFailure("마이페이지 수정에 실패했습니다."));
  }
}

export default function* mypageSaga() {
  yield takeLatest(mypageTypes.MYPAGE_REQUEST, mypageRequest);
  yield takeLatest(mypageTypes.EDIT_REQUEST, editRequest);
}
