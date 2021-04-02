import React from "react";

import * as S from "styles/diary";

const DiaryItem = ({ id, data, isSelected, setMod, setSelect }) => {
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
        onClick={() => {
          setMod(id);
        }}
      >
        {data.title}
      </S.ItemTitle>
      <S.ItemDate>{data.date_created}</S.ItemDate>
    </S.ItemContainer>
  );
};

export default DiaryItem;
