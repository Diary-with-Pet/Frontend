import React, { useState, useEffect, useReducer } from "react";

import D from "../../styles/divs";
import T from "../../styles/text";
import I from "../../styles/inputs";
import B from "../../styles/buttons";

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Alert from "api/Alert";
import profile from "../../image/profile.png";
import { registerActions } from "../../modules/register";

const Register = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("오류");
  const store = useSelector((state) => state.registerReducer);
  const history = useHistory();
  useEffect(() => {
    if (store.result === "success") {
      history.push("/main");
    } else if (store.result === "fail") {
      setErrorMessage(store.reason);
      setError(true);
    }
  }, [store]);

  const registerDispatch = useDispatch();
  const imageReader = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e);
    fileReader.onload = (e) => {
      dispatch({ type: "IMAGE", image: e.target.result });
    };
  };

  const reducer = (state = data, action) => {
    switch (action.type) {
      case "NAME":
        return { ...state, name: action.name };
      case "EMAIL":
        return { ...state, email: action.email };
      case "PASSWORD":
        return { ...state, password: action.password };
      case "PASSWORDCONFIRM":
        return {
          ...state,
          passwordConfirm: action.passwordConfirm,
          isRightPassword: action.password === action.isRightPassword,
        };
      case "IMAGEPATH":
        imageReader(action.imagePath);
        return {
          ...state,
          imagePath: action.imagePath,
        };
      case "IMAGE":
        return {
          ...state,
          image: action.image,
        };
      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    image: "",
    imagePath: "",
    isRightPassword: true,
  });

  const setNullError = (name) => `${name}은(는) 비워둘 수 없습니다`;

  const onRegister = () => {
    if (data.name.length <= 0) {
      setErrorMessage(setNullError("이름"));
      setError(true);
    } else if (data.email.length <= 0) {
      setErrorMessage(setNullError("이메일"));
      setError(true);
    } else if (!data.email.includes("@")) {
      setErrorMessage("올바른 이메일을 적어주세요");
      setError(true);
    } else if (data.password.length <= 0) {
      setErrorMessage(setNullError("비밀번호"));
      setError(true);
    } else if (!data.isRightPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다");
      setError(true);
    }

    registerDispatch(registerActions.registerRequest(data));
  };

  return (
    <>
      {error && (
        <Alert
          severity="warnning"
          message={errorMessage}
          setVisible={setError}
        />
      )}
      <D.BeigeBackground />
      <D.RoundShadowBox top="3" width="20">
        <T.Title>일기쓰개</T.Title>
        <label htmlFor="image">
          <D.ImageInputBox
            src={data.image ? data.image : profile}
            width="15"
            height="20"
            radius="20"
            img={data.imagePath !== undefined}
          />
        </label>
        <I.ImageInput
          id="image"
          type="file"
          accept="image/*"
          files={data.imagePath}
          onChange={(e) => {
            dispatch({ type: "IMAGEPATH", imagePath: e.target.files[0] });
          }}
        />
        <I.LoginInput
          top="1"
          placeholder="이름"
          value={data.name}
          onChange={(e) => dispatch({ type: "NAME", name: e.target.value })}
        />
        <I.LoginInput
          top="2"
          placeholder="이메일"
          type="email"
          value={data.email}
          onChange={(e) => dispatch({ type: "EMAIL", email: e.target.value })}
        />
        <I.LoginInput
          type="password"
          top="1"
          placeholder="비밀번호"
          value={data.password}
          onChange={(e) =>
            dispatch({ type: "PASSWORD", password: e.target.value })
          }
        />
        <I.LoginInput
          type="password"
          top="1"
          placeholder="비밀번호 확인"
          value={data.passwordConfirm}
          onChange={(e) =>
            dispatch({
              type: "PASSWORDCONFIRM",
              passwordConfirm: e.target.value,
            })
          }
        />
        <B.RoundBtn width="20" height="3" top="2" onClick={onRegister}>
          회원가입
        </B.RoundBtn>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "#FF6C7F",
            cursor: "pointer",
            marginTop: "2rem",
          }}
        >
          로그인으로
        </Link>
      </D.RoundShadowBox>
    </>
  );
};

export default Register;
