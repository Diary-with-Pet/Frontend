import React, { useState, useMemo } from "react";
import TodoItem from "./todoItem";

import T from "styles/text";
import D from "styles/divs";

const task = [
  {
    id: 0,
    title: "title수정",
    content: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    classification: 3,
  },
  {
    id: 1,
    title: "title2",
    content: "bbbbbbbbbbbbbbbbbbbb",
    classification: 2,
  },
  {
    id: 2,
    title: "cnrkcnrl",
    content: "cccccccccccccccccccccc",
    classification: 1,
  },
  {
    id: 3,
    title: "cnrkcnrl",
    content: "cccccccccccccccccccccc",
    classification: 1,
  },
];
const TodoList = () => {
  const [list, setList] = useState(task);
  const todo = useMemo(() => {
    return list.filter((l) => l.classification === 1);
  }, [list]);
  const progress = useMemo(() => {
    return list.filter((l) => l.classification === 2);
  }, [list]);
  const done = useMemo(() => {
    return list.filter((l) => l.classification === 3);
  }, [list]);

  const onDragStart = (e) => {
    e.dataTransfer.setData("text/plain", e.currentTarget.id);
    e.dataTransfer.effectAllowed = "move";
  };

  const onDragEnter = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  const onDragLeave = (e) => {
    let currentTarget = e.currentTarget;
    let newTarget = e.relatedTarget;
    if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
      return;
    e.preventDefault();
  };
  const onDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  const onDrop = (e, value) => {
    e.preventDefault();
    e.currentTarget.classList.remove("dragged-over");
    let data = e.dataTransfer.getData("text/plain");
    console.log(data);
    let updated = list.map((l) => {
      if (l.id == data) l.classification = value;
      return l;
    });
    console.log(data);
    setList(updated);
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <D.InLineBox left="20">
        <T.MagentaThin size="5" left="1">
          TO DO LIST
        </T.MagentaThin>
      </D.InLineBox>
      <div style={{ marginLeft: "10rem" }}>
        <D.TodoInput>
          <input />
          <button>등록</button>
        </D.TodoInput>
        <D.FlexBoxRow left="5" top="1" left="10" right="10" width={55}>
          <D.DragArea
            type="todo"
            onDragLeave={(e) => onDragLeave(e)}
            onDragEnter={(e) => onDragEnter(e)}
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, 1)}
          >
            <T.WhiteThin>NO STARTED</T.WhiteThin>
            <div class="container">
              {todo.map((e) => (
                <TodoItem item={e}></TodoItem>
              ))}
            </div>
          </D.DragArea>
          <D.DragArea
            type="progress"
            onDragLeave={(e) => onDragLeave(e)}
            onDragEnter={(e) => onDragEnter(e)}
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, 2)}
          >
            <T.WhiteThin>PROGRESS</T.WhiteThin>
            <div class="container">
              {progress.map((e) => (
                <TodoItem item={e}></TodoItem>
              ))}
            </div>
          </D.DragArea>
          <D.DragArea
            type="done"
            onDragLeave={(e) => onDragLeave(e)}
            onDragEnter={(e) => onDragEnter(e)}
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => onDrop(e, 3)}
          >
            <T.WhiteThin>COMPLETE</T.WhiteThin>
            <div class="container">
              {done.map((e) => (
                <TodoItem item={e}></TodoItem>
              ))}
            </div>
          </D.DragArea>
        </D.FlexBoxRow>
      </div>
    </div>
  );
};

export default TodoList;
