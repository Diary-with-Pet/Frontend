import React from "react";

import T from "styles/text";
import D from "styles/divs";

const MyPetItem = () => {
  return (
    <D.PetContainer>
      <D.FlexBoxRow>
        <D.CircleImage />
        <D.InLineBox
          style={{ position: "absolute", left: "15rem", top: "2rem" }}
        >
          <D.FlexBoxRow>
            <T.WhiteBold size={2} right={1}>
              이름
            </T.WhiteBold>
            <i className="fas fa-venus" style={{ fontSize: "2rem" }}></i>
            <T.WhiteLight
              size={1}
              left={0.5}
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "7rem",
              }}
            >
              요쿠셔테리어-------
            </T.WhiteLight>
          </D.FlexBoxRow>
          <T.WhiteLight size={1}>태어난 날짜</T.WhiteLight>
          <T.WhiteThin
            size={1}
            top={1}
            style={{
              width: "12rem",
              height: "5rem",
              overflowY: "scroll",
            }}
          >
            기타 사항
          </T.WhiteThin>
        </D.InLineBox>
      </D.FlexBoxRow>
      <D.FlexBoxRow
        style={{ position: "absolute", bottom: "1rem", right: "1rem" }}
      >
        <T.WhiteLight size={0.5} right={1}>
          수정하기
        </T.WhiteLight>
        <T.MagentaLight size={0.5}>삭제하기</T.MagentaLight>
      </D.FlexBoxRow>
    </D.PetContainer>
  );
};

export default MyPetItem;
