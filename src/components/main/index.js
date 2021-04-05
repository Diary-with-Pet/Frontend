import React, { useRef, useState, useEffect } from "react";
import { SideMenu } from "components/main/sideMenu";
import { MyPage } from "components/main/myPage";
import { MyPet } from "components/main/myPet";
import { TodoList } from "components/main/todoList";
import { DiaryContainer } from "components/main/diaryList";

import { WriteDiary } from "./writeDiary";
import { useHistory } from "react-router-dom";

const Main = () => {
  const [prePos, setPrePos] = useState(0);
  let delta = 0;
  const container = useRef();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPrePos(0);
    if (!localStorage.getItem("accessToken")) history.push("/login");
  }, [history]);

  const scrollMoveTo = (num) => {
    let target = container.current.childNodes[num];
    target.scrollIntoView({
      behavior: "smooth",
    });
    setPrePos(num);
    delta = 0;
  };

  return (
    <div style={{ display: "flex" }}>
      <SideMenu moveTo={scrollMoveTo} focus={prePos} onClick={() => delta} />
      <div ref={container} style={{ width: "100vw" }}>
        <MyPage />
        <MyPet />
        <TodoList />
        <DiaryContainer />
        <WriteDiary />
      </div>
    </div>
  );
};

export default Main;
