import { combineReducers } from "redux";
import loginReducer from "./login";
import registerReducer from "./register";
import mypageReducer from "./mypage";
const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  mypageReducer,
});

export default rootReducer;
