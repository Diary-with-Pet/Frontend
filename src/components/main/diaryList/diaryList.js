import React, { useEffect, useState, useMemo } from "react";

import * as S from "styles/diary";
import DiaryItem from "./diaryItem";
import { getAccess } from "api";
const DiaryList = ({ setMod }) => {
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [list, setList] = useState([{ id: 0 }]);

  const allSelect = () => {
    setIsAllSelected(!isAllSelected);
    const newList = list.map((e) => ({ ...e, isSelected: isAllSelected }));
    setList(newList);
  };

  const setSelect = (id) => {
    console.log("select" + id);
    const newList = list.map((e) =>
      e.id === id ? { ...e, isSelected: !e.isSelected } : e
    );
    console.log(newList);
    setList(newList);
  };

  useEffect(() => {
    const data = [
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 2 },
      { id: 2 },
      { id: 2 },
      { id: 0 },
      { id: 1 },
      { id: 2 },
      { id: 2 },
      { id: 2 },
      { id: 2 },
    ];
    //  = getAccess()
    //   .get("/")
    //   .catch(() => alert("일기 목록을 불러오는 것을 실패하였습니다."));
    const newList = data.map((e, i) => ({ ...e, isSelected: false }));
    setList(newList);
    //dispatch(diaryActions.requestList());
  }, []);

  const writeDiary = () => {
    let target = document.querySelector(".diary");
    target.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <S.ListContainer>
      <S.FlexBoxColumn>
        <S.SpaceBox>
          <S.FlexBox style={{ display: "flex" }}>
            <S.SelectButton onClick={allSelect}>전체 선택</S.SelectButton>
            <S.DeleteButton>삭제</S.DeleteButton>
          </S.FlexBox>
          <S.RoundBtn onClick={writeDiary}>일기 작성</S.RoundBtn>
        </S.SpaceBox>
        <S.ListBox>
          {list.map((e, i) => (
            <DiaryItem
              key={i}
              id={e.id}
              isSelected={e.isSelected}
              setMod={setMod}
              setSelect={setSelect}
            />
          ))}
        </S.ListBox>
      </S.FlexBoxColumn>
    </S.ListContainer>
  );
};

export default DiaryList;
