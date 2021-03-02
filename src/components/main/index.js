import React, { useRef, useState, useEffect } from "react";
import { SideMenu } from "components/main/sideMenu";
import { MyPage } from "components/main/myPage";
import D from "styles/divs";

const Main = () => {
  const [prePos, setPrePos] = useState(0);
  const container = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollMoveTo = (num) => {
    container.current.scrollIntoView({ behavior: "smooth" });
    const size = container.current.clientHeight / 5;
    window.scrollTo({ left: 0, top: size * num, behavior: "smooth" });
    setPrePos(num);
  };

  return (
    <D.MainContainer>
      <SideMenu moveTo={scrollMoveTo} focus={prePos} />
      <div ref={container}>
        <MyPage />
        <MyPage />
        <MyPage />
        <MyPage />
        <MyPage />
      </div>
    </D.MainContainer>
  );
};

export default Main;
