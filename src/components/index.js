import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { createGlobalStyle } from "styled-components";
import { Login } from "components/login";
import { Register } from "components/register";
import Main from "components/main";
import { useHistory } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  padding:0
}`;
const Router = () => {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) history.push("/main");
    else history.push("/login");
  }, [history]);
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
