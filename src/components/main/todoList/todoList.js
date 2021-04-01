import React, { useState, useMemo, useEffect } from "react";
import TodoItem from "./todoItem";

import * as S from "styles/todo";
import { getAccess } from "api";

const TodoList = () => {
  const [list, setList] = useState([
    {
      id: 11,
      title: "title수정",
      content: "ㅎㅎ",
      classification: 3,
    },
    {
      id: 12,
      title: "title2",
      content: "cont2",
      classification: 1,
    },
    {
      id: 13,
      title: "cnrkcnrl",
      content: "ㅎㅎ",
      classification: 1,
    },
  ]);
  const [text, setText] = useState("");

  const requestList = () => {
    getAccess()
      .get("/todo")
      .then((e) => setList(e.data))
      .catch(() => alert("투두리스트를 불러오는것을 실패했습니다"));
  };
  useEffect(() => {
    requestList();
  }, []);

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
    const data = e.dataTransfer.getData("data");
    list.map((l) => {
      if (l.id === parseInt(data)) {
        getAccess()
          .patch(`/todo/${l.id}`, {
            classification: value,
          })
          .then(() => requestList())
          .catch(() => alert("네트워크 에러"));
        //dispatch(todoActions.editRequest(l.id, { classification: value }));
      }
      return l;
    });
  };

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = () => {
    const data = {
      content: text,
      classification: 1,
    };
    getAccess()
      .post("/todo", data)
      .catch(() => alert("투두리스트 등록을 실패했습니다."));
    setText("");
  };
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <S.Container>
        <S.Title>TO DO LIST</S.Title>
        <S.FlexBox>
          <S.TodoInputBox>
            <input
              value={text}
              onChange={onChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") onSubmit();
              }}
            />
            <button onClick={onSubmit}>등록</button>
          </S.TodoInputBox>
          <S.DragAreaBox>
            <S.DragArea
              type="todo"
              onDragLeave={(e) => onDragLeave(e)}
              onDragEnter={(e) => onDragEnter(e)}
              onDragOver={(e) => onDragOver(e)}
              onDrop={(e) => onDrop(e, 1)}
            >
              <S.ListName>NO STARTED</S.ListName>
              <div class="container">
                {todo.map((e) => (
                  <TodoItem item={e} requestList={requestList}></TodoItem>
                ))}
              </div>
            </S.DragArea>
            <S.DragArea
              type="progress"
              onDragLeave={(e) => onDragLeave(e)}
              onDragEnter={(e) => onDragEnter(e)}
              onDragOver={(e) => onDragOver(e)}
              onDrop={(e) => onDrop(e, 2)}
            >
              <S.ListName>PROGRESS</S.ListName>
              <div class="container">
                {progress.map((e) => (
                  <TodoItem item={e} requestList={requestList}></TodoItem>
                ))}
              </div>
            </S.DragArea>
            <S.DragArea
              type="done"
              onDragLeave={(e) => onDragLeave(e)}
              onDragEnter={(e) => onDragEnter(e)}
              onDragOver={(e) => onDragOver(e)}
              onDrop={(e) => onDrop(e, 3)}
            >
              <S.ListName>COMPLETE</S.ListName>
              <div class="container">
                {done.map((e) => (
                  <TodoItem item={e} requestList={requestList}></TodoItem>
                ))}
              </div>
            </S.DragArea>
          </S.DragAreaBox>
        </S.FlexBox>
      </S.Container>
    </div>
  );
};

export default TodoList;
