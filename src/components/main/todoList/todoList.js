import React, { useState, useMemo, useEffect } from "react";
import TodoItem from "./todoItem";

import { useSelector, useDispatch } from "react-redux";
import { todoTypes, todoActions } from "modules/todo";

import T from "styles/text";
import D from "styles/divs";

const TodoList = () => {
  const store = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  const [list, setList] = useState(store.list);
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(todoActions.requestList());
  }, []);

  useEffect(() => {
    setList(store.list);
    console.log(list);
  }, [store]);

  const todo = useMemo(() => {
    return list.filter((l) => l.classification === 1);
  }, [list]);
  const progress = useMemo(() => {
    return list.filter((l) => l.classification === 2);
  }, [list]);
  const done = useMemo(() => {
    return list.filter((l) => l.classification === 3);
  }, [list]);

  const onDragEnter = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  const onDragLeave = (e) => {
    e.preventDefault();
  };
  const onDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };
  const onDrop = (e, value) => {
    e.preventDefault();
    e.currentTarget.classList.remove("dragged-over");
    const data = e.dataTransfer.getData("data");
    const updated = list.map((l) => {
      if (l.id === parseInt(data)) {
        l.classification = value;
        dispatch(todoActions.editRequest(l.id, { classification: value }));
      }
      return l;
    });

    setList(updated);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = () => {
    const data = {
      content: text,
      classification: 1,
    };
    dispatch(todoActions.createRequest(data));
    setText("");
  };
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <D.InLineBox left="20">
        <T.MagentaThin size="5" left="1">
          TO DO LIST
        </T.MagentaThin>
      </D.InLineBox>
      <D.FlexBoxColumn>
        <D.TodoInput>
          <input
            value={text}
            onChange={onChange}
            onKeyPress={(e) => {
              if (e.key === "Enter") onSubmit();
            }}
          />
          <button onClick={onSubmit}>등록</button>
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
      </D.FlexBoxColumn>
    </div>
  );
};

export default TodoList;
