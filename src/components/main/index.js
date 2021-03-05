import React, { useRef, useState, useEffect } from "react";
import { SideMenu } from "components/main/sideMenu";
import { MyPage } from "components/main/myPage";
import { MyPet } from "components/main/myPet";
import { TodoList } from "components/main/todoList";
import D from "styles/divs";

const Main = () => {
  const [prePos, setPrePos] = useState(0);
  let delta = 0;
  const container = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
    setPrePos(0);
    delta = 0;
  }, []);

  const scrollMoveTo = (num) => {
    let target = container.current.childNodes[num];
    target.scrollIntoView({
      behavior: "smooth",
    });
    setPrePos(num);
    console.log(num);
    delta = 0;
  };
  return (
    <D.MainContainer>
      <SideMenu moveTo={scrollMoveTo} focus={prePos} onClick={() => delta} />
      <div ref={container}>
        <MyPage />
        <MyPet />
        <TodoList />
        <MyPage />
        <MyPage />
      </div>
    </D.MainContainer>
  );
};

export default Main;
