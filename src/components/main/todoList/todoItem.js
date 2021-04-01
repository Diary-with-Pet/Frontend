import React, { useState, useRef, useEffect } from "react";

import * as S from "styles/todo";
import { getAccess } from "api";

const TodoItem = ({ item, requestList }) => {
  const [text, setText] = useState(item);
  useEffect(() => {
    setText(item.content);
  }, [item]);
  const [readOnly, setReadOnly] = useState(true);
  const focus = useRef();
  const onDragStart = (e) => {
    e.dataTransfer.setData("data", e.currentTarget.id);
    e.dataTransfer.effectAllowed = "move";
  };

  const deleteItem = () => {
    getAccess()
      .delete(`/todo/${item.id}`)
      .then(() => requestList())
      .catch(() => alert("삭제 실패"));
  };

  const editItem = () => {
    if (!readOnly) {
      getAccess()
        .patch(`/todo/${item.id}`, {
          content: text,
        })
        .catch(() => alert("네트워크 에러"))
        .finally(() => requestList());
    } else {
      focus.current.focus();
    }
    setReadOnly(!readOnly);
  };

  return (
    <>
      <S.DragItem id={item.id} draggable onDragStart={(e) => onDragStart(e)}>
        <S.DragContainer>
          <S.TextArea
            ref={focus}
            readOnly={readOnly}
            onWheel={(e) => e.stopPropagation()}
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></S.TextArea>
          <S.FlexBoxRow
            style={{
              justifyContent: "left",
              fontSize: "1rem",
              marginRight: "0",
            }}
          >
            <S.IconButton
              className={readOnly ? "fas fa-edit" : "fab fa-telegram-plane"}
              onClick={editItem}
            />
            <S.IconButton
              className="fas fa-trash"
              onClick={deleteItem}
            ></S.IconButton>
          </S.FlexBoxRow>
        </S.DragContainer>
      </S.DragItem>
    </>
  );
};

export default TodoItem;
