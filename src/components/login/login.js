import React, { useState } from "react";

import * as S from "styles/login";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const emailRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[00-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    if (email.length <= 0) {
      alert("이메일을 입력해주세요");
    } else if (!emailRegExp.test(email)) {
      alert("이메일 형식에 맞게 작성해 주세요");
    } else if (password.length <= 0) {
      alert("비밀번호를 입력해주세요");
    } else {
      const data = {
        email: email,
        password: password,
      };
      const client = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
      });
      client
        .post("user/login/", data)
        .then((e) => {
          localStorage.setItem("accessToken", e.data.token);
          history.push("/main");
        })
        .catch((e) => alert(e.response));
    }

    return;
  };

  return (
    <>
      <S.Background />
      <S.LoginBox>
        <S.Title>일기쓰개</S.Title>
        <S.LoginInput
          placeholder="이메일"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.LoginInput
          placeholder="비밀번호"
          type="password"
          value={password}
          onKeyPress={(e) => {
            if (e.key === "Enter") onLogin();
          }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <S.RoundBtn width="20" height="3" top="3" onClick={onLogin}>
          로그인
        </S.RoundBtn>

        <Link
          to="/register"
          style={{
            textDecoration: "none",
            color: "#FF6C7F",
          }}
        >
          <S.BorderRoundBtn width="20" height="3" top="1">
            회원가입
          </S.BorderRoundBtn>
        </Link>
      </S.LoginBox>
    </>
  );
};

export default Login;
