import React, { useState, useEffect } from "react";
import { EditModal } from "./editModal";
import { getAccess } from "api";

import * as S from "styles/myPage";

const MyPage = () => {
  const [modalVisible, setModalVisivle] = useState(false);
  const [myData, setMyData] = useState({
    email: "",
    username: "",
    profile_image: "",
    profile: "",
  });

  useEffect(() => {
    function LimitWheel(e) {
      if (modalVisible) {
        e.preventDefault();
      }
    }
    window.addEventListener("wheel", LimitWheel, {
      passive: false,
    });
    return () => window.removeEventListener("wheel", LimitWheel);
  }, [modalVisible]);

  const getMypage = () => {
    getAccess()
      .get("/mypage/list")
      .then((e) => setMyData(e.data[0]))
      .catch(() => alert("마이페이지 불러오기에 실패하였습니다."));
  };
  useEffect(() => {
    getMypage();
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      {modalVisible && (
        <EditModal
          getMypage={getMypage}
          setModalVisivle={setModalVisivle}
          curData={myData}
        />
      )}
      <S.Container>
        <S.Title>MY PAGE</S.Title>
        <S.InfoBox>
          <S.ProfileImage src={myData.profile_image || null} />
          <S.TextBox>
            <S.FlexBoxRow>
              <S.UserName>{myData.username}</S.UserName>
              <S.IconButton
                top="1"
                size="1.5"
                left="0.5"
                color="pigPink"
                hover="magenta"
                onClick={() => setModalVisivle(true)}
              >
                <i className="fas fa-edit"></i>
              </S.IconButton>
            </S.FlexBoxRow>
            <S.EmailText>{myData.email}</S.EmailText>
            <S.ContentsText>{myData.profile}</S.ContentsText>
          </S.TextBox>
        </S.InfoBox>
      </S.Container>
    </div>
  );
};

export default MyPage;
