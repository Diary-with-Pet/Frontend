import React, { useState, useRef, useEffect } from "react";

import D from "styles/divs";
import B from "styles/buttons";

import { useDispatch } from "react-redux";
import { todoActions } from "modules/todo";

const TodoItem = ({ item }) => {
  const [text, setText] = useState(item);
  const dispatch = useDispatch();

  useEffect(() => {
    setText(item.content);
  }, [item]);
  const [readOnly, setReadOnly] = useState(true);
  const focus = useRef();
  const onDragStart = (e) => {
    console.log(e);
    e.dataTransfer.setData("data", e.currentTarget.id);
    e.dataTransfer.effectAllowed = "move";
  };

  const deleteItem = () => {
    dispatch(todoActions.deleteRequest(item.id));
  };

  const editItem = () => {
    if (!readOnly) {
      dispatch(
        todoActions.editRequest(item.id, {
          content: text,
        })
      );
    } else {
      focus.current.focus();
    }
    setReadOnly(!readOnly);
  };

  return (
    <>
      <D.DragItem id={item.id} draggable onDragStart={(e) => onDragStart(e)}>
        <D.FlexBoxRow>
          <D.TextArea
            ref={focus}
            readOnly={readOnly}
            onWheel={(e) => e.stopPropagation()}
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></D.TextArea>
          <D.FlexBoxRow
            style={{
              justifyContent: "left",
              fontSize: "1rem",
              marginRight: "0",
            }}
          >
            <B.IconButton
              className={readOnly ? "fas fa-edit" : "fab fa-telegram-plane"}
              style={{
                marginRight: "0.5rem",
              }}
              hover="magenta"
              color="beige"
              onClick={editItem}
            />
            <B.IconButton
              className="fas fa-trash"
              hover="red"
              color="beige"
              onClick={deleteItem}
            ></B.IconButton>
          </D.FlexBoxRow>
        </D.FlexBoxRow>
      </D.DragItem>
    </>
  );
};

export default TodoItem;
