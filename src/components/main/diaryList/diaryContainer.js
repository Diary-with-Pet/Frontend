import React, { useState } from "react";

import * as S from "styles/diary";
import DiaryList from "./diaryList";
import DiaryDetail from "./diaryDetail";

const DiaryContainer = () => {
  const [mod, setMod] = useState(-1);
  const [len, setLen] = useState(0);

  return (
    <div className="list" style={{ height: "100vh", width: "100vw" }}>
      <S.Container>
        <S.Title>DIARY</S.Title>
        {mod < 0 ? (
          <DiaryList setMod={setMod} setLen={setLen} />
        ) : (
          <DiaryDetail setMod={setMod} mod={mod} len={len} />
        )}
      </S.Container>
    </div>
  );
};

export default DiaryContainer;
