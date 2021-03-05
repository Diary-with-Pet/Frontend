import React, { useState, useMemo } from "react";

import T from "styles/text";
import D from "styles/divs";
import B from "styles/buttons";
const TodoItem = ({ item }) => {
  const onDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.currentTarget.id);
    e.dataTransfer.effectAllowed = "move";
  };

  return (
    <>
      <D.DragItem id={item.id} draggable onDragStart={(e) => onDragStart(e)}>
        <D.FlexBoxRow>
          <D.TextArea
            readOnly={true}
            onWheel={(e) => e.stopPropagation()}
            value={item.content}
          ></D.TextArea>
          <D.FlexBoxRow
            style={{
              justifyContent: "left",
              fontSize: "1rem",
              marginRight: "0",
            }}
          >
            <B.IconButton
              style={{
                marginRight: "0.5rem",
              }}
              className="fas fa-edit"
              hover="magenta"
              color="beige"
            ></B.IconButton>
            <B.IconButton
              className="fas fa-trash"
              hover="red"
              color="beige"
            ></B.IconButton>
          </D.FlexBoxRow>
        </D.FlexBoxRow>
      </D.DragItem>
    </>
  );
};

export default TodoItem;
