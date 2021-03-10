import React, { useState } from "react";

import T from "styles/text";
import D from "styles/divs";
import DiaryList from "./diaryList";
import DiaryDetail from "./diaryDetail";
import { useSelector } from "react-redux";

const DiaryContainer = () => {
  const store = useSelector((state) => state.diaryReducer);
  console.log(store.id);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <D.InLineBox left="0" top="0">
        <T.MagentaThin size="5" left="1">
          DIARY
        </T.MagentaThin>
        {store.mod === "list" ? <DiaryList /> : <DiaryDetail />}
      </D.InLineBox>
    </div>
  );
};

export default DiaryContainer;
