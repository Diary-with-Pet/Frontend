import React from "react";

import * as S from "styles/diary";

const DiaryDetail = ({ setMod }) => {
  return (
    <S.DetailContainer>
      <S.FlexBoxColumn>
        <S.SpaceBox>
          <S.DateText>2021-03-13</S.DateText>
          <S.RoundBtn onClick={() => setMod(-1)}>목록으로</S.RoundBtn>
        </S.SpaceBox>
        <S.DiaryContainer></S.DiaryContainer>
        <S.SpaceBox>
          <S.ArrowButton>{"<"}</S.ArrowButton>
          <S.ArrowButton>{">"}</S.ArrowButton>
        </S.SpaceBox>
      </S.FlexBoxColumn>
    </S.DetailContainer>
  );
};

export default DiaryDetail;
