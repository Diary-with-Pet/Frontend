import React, { useState, useMemo } from "react";

import D from "../../styles/divs";
import T from "../../styles/text";
import I from "../../styles/inputs";
import B from "../../styles/buttons";
import defaulImage from "image/plus.jpg";
import { useHistory } from "react-router-dom";
import Alert from "api/Alert";

const Register = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [image, setImage] = useState();
  const [imagePath, setImagePath] = useState();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("오류");
  const isRightPassword = useMemo(() => passwordConfirm === password, [
    passwordConfirm,
    password,
  ]);
  const imageReader = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function (result) {
      setImage(result.target.result);
    };
  };

  const gotoLogin = () => {
    history.push("/login");
  };

  const setNullError = (name) => `${name}은(는) 비워둘 수 없습니다`;

  const onLogin = () => {
    if (name.length <= 0) {
      setErrorMessage(setNullError("이름"));
      setError(true);
    } else if (email.length <= 0) {
      setErrorMessage(setNullError("이메일"));
      setError(true);
    } else if (!email.includes("@")) {
      setErrorMessage("올바른 이메일을 적어주세요");
      setError(true);
    } else if (password.length <= 0) {
      setErrorMessage(setNullError("비밀번호"));
      setError(true);
    } else if (!isRightPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다");
      setError(true);
    }
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
            src={image}
            width="15"
            height="20"
            img={imagePath !== undefined}
          />
        </label>
        <I.ImageInput
          id="image"
          type="file"
          accept="image/*"
          files={imagePath}
          onChange={(e) => {
            setImagePath(e.target.value);
            imageReader(e);
          }}
        />
        <I.LoginInput
          top="1"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <I.LoginInput
          top="2"
          placeholder="이메일"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <I.LoginInput
          type="password"
          top="1"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <I.LoginInput
          type="password"
          top="1"
          placeholder="비밀번호 확인"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <B.RoundBtn width="20" height="3" top="2" onClick={onLogin}>
          회원가입
        </B.RoundBtn>
        <T.MagentaLight
          top="1"
          style={{ cursor: "pointer" }}
          onClick={gotoLogin}
        >
          로그인으로
        </T.MagentaLight>
      </D.RoundShadowBox>
    </>
  );
};

export default Register;
