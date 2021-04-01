import React, { useState } from "react";

import * as S from "styles/diary";
import DiaryList from "./diaryList";
import DiaryDetail from "./diaryDetail";

const DiaryContainer = () => {
  const [mod, setMod] = useState(-1);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <S.Container>
        <S.Title>DIARY</S.Title>
        {mod < 0 ? (
          <DiaryList setMod={setMod} />
        ) : (
          <DiaryDetail setMod={setMod} mod={mod} />
        )}
      </S.Container>
    </div>
  );
};

export default DiaryContainer;
