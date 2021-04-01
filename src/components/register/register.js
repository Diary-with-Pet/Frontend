import React, { useReducer } from "react";
import axios from "axios";

import * as S from "styles/register";

import { Link, useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const imageReader = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e);
    fileReader.onload = (e) => {
      dispatch({ type: "IMAGE", image: e.target.result });
    };
  };

  const reducer = (state = {}, action) => {
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
  });

  const onRegister = () => {
    console.log(data.password !== data.passwordConfirm);
    if (data.name.length <= 0) {
      alert("이름은 비워둘 수 없습니다.");
    } else if (data.email.length <= 0) {
      alert("이메일은 비워둘 수 없습니다.");
    } else if (!data.email.includes("@")) {
      alert("이메일 형식을 맞춰주세요.");
    } else if (data.password.length <= 0) {
      alert("비밀번호는 비워둘 수 없습니다.");
    } else if (data.password !== data.passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("username", data.name);
      formData.append("password", data.password);
      formData.append("profile_image", data.imagePath);

      const client = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
      });
      client
        .post("/user/register/", formData)
        .then((e) => history.push("/main"))
        .catch((e) => alert("회원가입에 실패하였습니다."));
    }
  };

  return (
    <>
      <S.Background />
      <S.RegisterBox top="3" width="20">
        <S.Title>일기쓰개</S.Title>
        <label htmlFor="image">
          <S.ImageInputBox
            src={data.image ? data.image : undefined}
            img={data.imagePath !== undefined}
          />
        </label>
        <S.ImageInput
          id="image"
          type="file"
          accept="image/*"
          files={data.imagePath}
          onChange={(e) => {
            dispatch({ type: "IMAGEPATH", imagePath: e.target.files[0] });
          }}
        />
        <S.RegisterInput
          placeholder="이름"
          value={data.name}
          onChange={(e) => dispatch({ type: "NAME", name: e.target.value })}
        />
        <S.RegisterInput
          placeholder="이메일"
          type="email"
          value={data.email}
          onChange={(e) => dispatch({ type: "EMAIL", email: e.target.value })}
        />
        <S.RegisterInput
          type="password"
          placeholder="비밀번호"
          value={data.password}
          onChange={(e) =>
            dispatch({ type: "PASSWORD", password: e.target.value })
          }
        />
        <S.RegisterInput
          type="password"
          placeholder="비밀번호 확인"
          value={data.passwordConfirm}
          onChange={(e) =>
            dispatch({
              type: "PASSWORDCONFIRM",
              passwordConfirm: e.target.value,
            })
          }
        />
        <S.RoundBtn onClick={onRegister}>회원가입</S.RoundBtn>
        <Link className="link" to="/login">
          로그인으로
        </Link>
      </S.RegisterBox>
    </>
  );
};

export default Register;
