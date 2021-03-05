import React, { useState, useEffect } from "react";

import D from "styles/divs";
import T from "styles/text";
import I from "styles/inputs";
import B from "styles/buttons";

import { loginActions } from "modules/login";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import Alert from "api/Alert";

const replace = /!@#$%^&*()+=-|[]{};:'"\|?/g;

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const store = useSelector((state) => state.loginReducer);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (store.result === "success") {
      history.push("/main");
    } else if (store.result === "fail") {
      setErrorMessage(store.reason);
      setError(true);
    }
  }, [store]);
  const onLogin = () => {
    if (email.length <= 0) {
      setErrorMessage("이메일을 입력해주세요");
      setError(true);
    } else if (!email.includes("@")) {
      setErrorMessage("이메일 형식에 맞게 작성해 주세요");
      setError(true);
    } else if (password.length <= 0) {
      setErrorMessage("비밀번호를 입력해주세요");
      setError(true);
    } else {
      const data = {
        email: email,
        password: password,
      };
      dispatch(loginActions.loginRequest(data));
      // setErrorMessage("로그인에 실패하였습니다");
      // setError(true);
    }
    return;
  };

  return (
    <>
      <D.BeigeBackground />
      {error && (
        <Alert
          severity="warnning"
          message={errorMessage}
          setVisible={setError}
        />
      )}
      <D.RoundShadowBox top="7" width="20">
        <T.Title>일기쓰개</T.Title>
        <I.LoginInput
          top="2"
          placeholder="이메일"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <I.LoginInput
          top="1"
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <B.RoundBtn width="20" height="3" top="3" onClick={onLogin}>
          로그인
        </B.RoundBtn>
        <B.BorderRoundBtn
          width="20"
          height="3"
          top="1"
          onClick={(e) => history.push("/register")}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "#FF6C7F",
            }}
          >
            회원가입
          </Link>
        </B.BorderRoundBtn>
      </D.RoundShadowBox>
    </>
  );
};

export default Login;
