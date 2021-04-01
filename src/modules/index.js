import { combineReducers } from "redux";
import diaryReducer from "./diary";

const rootReducer = combineReducers({
  diaryReducer,
});

export default rootReducer;
