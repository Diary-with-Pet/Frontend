import { call, put, takeLatest } from "redux-saga/effects";
import { registerTypes, registerActions } from "../modules/register";
import axios from "axios";

const callRegister = (data) => {
  const client = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
  });
  client
    .post("/user/register/", data)
    .then(console.log)
    .catch((e) => console.log(e.response.data));
};
function* REGISTER_REQUEST(action) {
  try {
    yield call(callRegister, action.data);
    yield put(registerActions.registerSuccesss());
  } catch (e) {
    yield put(registerActions.registerFailure("회원가입 실패"));
  }
}

export default function* registerSaga() {
  yield takeLatest(registerTypes.REGISTER_REQUEST, REGISTER_REQUEST);
}
