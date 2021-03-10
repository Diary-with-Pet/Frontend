import React, { useState, useReducer } from "react";
import Alert from "api/Alert";

import I from "styles/inputs";
import D from "styles/divs";
import B from "styles/buttons";

const MyPetModal = ({ modalVisible, setModalVisivle }) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const reducer = {};

  return (
    <>
      {error && (
        <Alert
          severity="warnning"
          message={errorMessage}
          setVisible={setError}
        />
      )}
      <D.BlackOverlay onClick={(e) => setModalVisivle(false)} />
      <D.ModalWhiteBox width="65" height="40" padding="3rem">
        <D.FlexBoxRow>
          <D.FlexBoxRow width="35" style={{ flexWrap: "wrap" }}>
            <I.MypetInput placeholder="이름" />
            생년월일/입양날짜
            <I.MypetInput type="date" />
            <I.MypetSelector>
              <option>여자</option>
              <option>남자</option>
              <option>그 외</option>
            </I.MypetSelector>
            <I.MypetInput placeholder="종" />
            <I.BorderArea placeholder="기타사항" height="10" top="1" />
          </D.FlexBoxRow>
          <D.FlexBoxColumn width="30" height="35">
            <label htmlFor="image">
              <D.ImageInputBox width="15" height="15" radius="200" />
            </label>
            <I.ImageInput id="image" type="file" accept="image/*" />
            <I.BottomBorderInput />
            <B.RoundBtn width="15" height="3" top="2">
              {modalVisible === "생성" ? "작성완료" : "수정완료"}
            </B.RoundBtn>
          </D.FlexBoxColumn>
        </D.FlexBoxRow>
      </D.ModalWhiteBox>
    </>
  );
};
export default MyPetModal;
