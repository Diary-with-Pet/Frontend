import React from "react";
import Editor from "./Editor";

import * as S from "styles/diaryWriter";

const WriteDiary = () => {
  return (
    <div class="diary" style={{ height: "100vh", width: "100vw" }}>
      <S.Container>
        <S.Title size="5" left="1">
          DIARY
        </S.Title>
        <Editor />
      </S.Container>
    </div>
  );
};

export default WriteDiary;
