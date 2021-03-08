import React from "react";

import T from "styles/text";
import D from "styles/divs";
import DiaryItem from "./diaryItem";

const DiaryList = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <D.InLineBox left="0" top="0">
        <T.MagentaThin size="5" left="1">
          DIARY
        </T.MagentaThin>
        <D.FlexBoxColumn>
          <DiaryItem />
          <DiaryItem />
        </D.FlexBoxColumn>
      </D.InLineBox>
    </div>
  );
};

export default DiaryList;
