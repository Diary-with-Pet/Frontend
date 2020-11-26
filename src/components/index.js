import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
const Router = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route></Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Router;
