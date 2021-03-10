import { combineReducers } from "redux";
import loginReducer from "./login";
import registerReducer from "./register";
import mypageReducer from "./mypage";
import diaryReducer from "./diaryContainer";
import todoReducer from "./todo";
const rootReducer = combineReducers({
  loginReducer,
  registerReducer,
  mypageReducer,
  diaryReducer,
  todoReducer,
});

export default rootReducer;
