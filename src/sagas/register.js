import { call, put, takeLatest } from "redux-saga/effects";
import { registerTypes, registerActions } from "../modules/register";
import { customHistory as history } from "../store";

const callRegister = (data) => {
  throw Error;
};
function* REGISTER_REQUEST(action) {
  try {
    yield call(callRegister, action.data);
    yield put(registerActions.registerSuccesss());
    history.push("/login");
  } catch (e) {
    yield put(registerActions.registerFailure(""));
  }
}

export default function* registerSaga() {
  yield takeLatest(registerTypes.REGISTER_REQUEST, REGISTER_REQUEST);
}
