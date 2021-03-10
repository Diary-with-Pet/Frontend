import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { createGlobalStyle } from "styled-components";
import { Login } from "components/login";
import { Register } from "components/register";
import Main from "components/main";

const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  padding:0
}`;
const Router = () => {
  return (
    <>
      <GlobalStyle />
      {/* {localStorage.getItem("accessToken") ? (
        <Redirect to="/main" />
      ) : (
        <Redirect to="/login" />
      )} */}
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/main" component={Main} />
      </Switch>
    </>
  );
};

export default Router;
