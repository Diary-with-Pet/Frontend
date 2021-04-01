import React from "react";

import * as S from "styles/diary";

const DiaryItem = ({ id, isSelected, setMod, setSelect }) => {
  console.log(isSelected);

  return (
    <S.ItemContainer>
      <S.CheckBox htmlFor={`check${id}`} isSelected={isSelected}>
        ✔
      </S.CheckBox>
      <input
        type="checkbox"
        id={`check${id}`}
        value={isSelected}
        onClick={() => setSelect(id)}
      />
      <S.ItemTitle
        size={2}
        style={{ width: "30rem", textAlign: "left" }}
        onClick={() => {
          setMod(id);
        }}
      >
        Title
      </S.ItemTitle>
      <S.ItemDate>2020-03-08</S.ItemDate>
    </S.ItemContainer>
  );
};

export default DiaryItem;
