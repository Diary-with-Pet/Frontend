import React, { useState, useEffect } from "react";

import I from "styles/inputs";
import D from "styles/divs";
import T from "styles/text";

import { useDispatch } from "react-redux";
import { diaryActions } from "modules/diaryContainer";

const DiaryItem = ({ id, isSelected }) => {
  const [check, isChecked] = useState(isSelected);
  const dispatch = useDispatch();
  useEffect(() => isChecked(isSelected), [isSelected]);

  return (
    <D.ListItem>
      <I.CheckBox htmlFor={`check${id}`} type="checkbox" isChecked={check}>
        ✔
      </I.CheckBox>
      <input
        type="checkbox"
        id={`check${id}`}
        value={check}
        onClick={() => isChecked(!check)}
      />
      <T.MagentaBold
        size={2}
        style={{ width: "30rem", textAlign: "left" }}
        onClick={() => dispatch(diaryActions.modToDetail(id))}
      >
        Title
      </T.MagentaBold>
      <T.MagentaLight style={{ marginRight: "2rem" }}>
        2020-03-08
      </T.MagentaLight>
    </D.ListItem>
  );
};

export default DiaryItem;
