import { put, takeLatest, call } from "redux-saga/effects";
import { mypageTypes, mypageActions } from "modules/mypage";
import { getAccess } from "api/getRequest";

//getAccess.get("/mypage/list")
function* mypageRequest() {
  try {
    const { data } = yield call([getAccess(), "get"], "/mypage/list");
    data[0]["profile"] = "";
    yield put(mypageActions.mypageSuccess(data[0]));
  } catch (e) {
    yield put(mypageActions.mypageFailure("fail"));
  }
}

function* editRequest(action) {
  try {
    console.log(action);
    const { data } = yield call(
      [getAccess(), "patch"],
      `/mypage/update/${action.id}/`,
      action.data
    );
    console.log(data);
  } catch (e) {
    yield put(mypageActions.editFailure("그냥"));
  }
}

export default function* mypageSaga() {
  yield takeLatest(mypageTypes.MYPAGE_REQUEST, mypageRequest);
  yield takeLatest(mypageTypes.EDIT_REQUEST, editRequest);
}
