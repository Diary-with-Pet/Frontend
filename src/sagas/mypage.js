import { put, takeLatest, call } from "redux-saga/effects";
import { mypageTypes, mypageActions } from "../modules/mypage";
import axios from "axios";
function* callMypage() {
  //throw Error();
  // axios.get("").then(yield put(mypageActions.mypageResult({})));
}

function* mypageRequest(action) {
  console.log("a");
  try {
    yield call(callMypage);
    yield put(
      mypageActions.mypageSuccess({
        email: "chhan1151@naver.com",
        name: "가나다라마바",
        profileImage: "https://picsum.photos/300/500",
        body: "안되면슬픔.",
      })
    );
  } catch (e) {
    yield put(mypageActions.mypageFailure("fail"));
  }
}

function* callEdit(data) {
  console.log(data);
  // yield put(
  //   mypageActions.editSuccess({
  //     email: "chhan1151@naver.com",
  //     name: "수정됨",
  //     profileImage: "https://picsum.photos/300/500",
  //     body: "안되면슬픔.",
  //   })
  // );
  throw Error();
}
function* editRequest(action) {
  try {
    yield call(callEdit, action.data);
  } catch (e) {
    yield put(mypageActions.editFailure("그냥"));
  }
}

export default function* mypageSaga() {
  yield takeLatest(mypageTypes.MYPAGE_REQUEST, mypageRequest);
  yield takeLatest(mypageTypes.EDIT_REQUEST, editRequest);
}
