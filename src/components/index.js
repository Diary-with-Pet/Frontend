import React from "react";
import { Switch, Route } from "react-router-dom";

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
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/main" component={Main} />
      </Switch>
    </>
  );
};

export default Router;
