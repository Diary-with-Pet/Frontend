import { createStore, applyMiddleware } from "redux";
import { composeDevTools } from "redux-devtools-extension";
import craeteSagaMiddleware from "redux-saga";
import rootReducer from "../modules";
import rootSaga from "../sagas";
const sagaMiddleware = craeteSagaMiddleware();
const store = createStore(
  rootReducer,
  composeDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
export default store;
