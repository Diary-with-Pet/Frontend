import React, { useEffect, useState } from "react";

import T from "styles/text";
import D from "styles/divs";
import B from "styles/buttons";
import DiaryItem from "./diaryItem";

const DiaryList = () => {
  const [isAllSelected, setIsAllSelected] = useState(false);

  const allSelect = () => {
    setIsAllSelected(!isAllSelected);
  };

  const writeDiary = () => {
    let target = document.querySelector(".diary");
    target.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div
      style={{
        width: "100%",
        height: "40rem",
        overflow: "scroll",
        marginTop: "2rem",
      }}
    >
      <D.FlexBoxColumn top={3}>
        <D.FlexBoxRow width="58">
          <div style={{ display: "flex" }}>
            <T.MagentaLight onClick={allSelect}>
              {isAllSelected ? "선택 해제" : "전체 선택"}
            </T.MagentaLight>
            <T.MagentaBold>| 삭제</T.MagentaBold>
          </div>
          <B.RoundBtn width={10} height={3} onClick={writeDiary}>
            일기 작성
          </B.RoundBtn>
        </D.FlexBoxRow>
        <DiaryItem id={1} isSelected={isAllSelected} />
      </D.FlexBoxColumn>
    </div>
  );
};

export default DiaryList;
