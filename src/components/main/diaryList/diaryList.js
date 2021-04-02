import React, { useEffect, useState } from "react";

import * as S from "styles/diary";
import DiaryItem from "./diaryItem";
import { getAccess } from "api";

const DiaryList = ({ setMod, setLen }) => {
  const [isAllSelected, setIsAllSelected] = useState(false);
  const [list, setList] = useState([]);

  const getDiaryList = () => {
    getAccess()
      .get("/diary/")
      .then((e) => {
        const newList = e.data.map((e, i) => ({ ...e, isSelected: false }));
        setList(newList);
        setLen(newList.length);
      })
      .catch((e) => alert("다이어리 리스트를 불러오는 것을 실패하였습니다."));
  };
  useEffect(() => {
    getDiaryList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allSelect = () => {
    setIsAllSelected(!isAllSelected);
    const newList = list.map((e) => ({ ...e, isSelected: isAllSelected }));
    setList(newList);
  };

  const setSelect = (id) => {
    const newList = list.map((e) =>
      e.id === id ? { ...e, isSelected: !e.isSelected } : e
    );
    console.log(newList);
    setList(newList);
  };

  const writeDiary = () => {
    let target = document.querySelector(".diary");
    target.scrollIntoView({
      behavior: "smooth",
    });
  };

  const onDelete = () => {
    const removeList = list.filter((e) => e.isSelected === true && e.id);
    try {
      removeList.map((e) => {
        return getAccess().delete(`/diary/${e.id}`);
      });
      alert("선택한 일기를 모두 삭제하였습니다.");
    } catch (err) {
      alert("일기 삭제에 실패하였습니다.");
    } finally {
      getDiaryList();
    }
  };

  return (
    <S.ListContainer>
      <S.FlexBoxColumn>
        <S.SpaceBox>
          <S.FlexBox>
            <S.SelectButton onClick={allSelect}>전체 선택</S.SelectButton>
            <S.DeleteButton onClick={onDelete}>삭제</S.DeleteButton>
          </S.FlexBox>
          <S.FlexBox>
            <S.DeleteButton onClick={getDiaryList}>새로고침</S.DeleteButton>
            <S.RoundBtn onClick={writeDiary}>일기 작성</S.RoundBtn>
          </S.FlexBox>
        </S.SpaceBox>
        <S.ListBox>
          {list.map((e, i) => (
            <DiaryItem
              key={i}
              data={e}
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
