import React from "react";
import { SideMenu } from "components/main/sideMenu";
import { MyPage } from "components/main/myPage";

import D from "styles/divs";

const Main = () => {
  const scrollMoveTo = () => {};
  return (
    <D.MainContainer>
      <SideMenu moveTo={scrollMoveTo} />
      <MyPage />
    </D.MainContainer>
  );
};

export default Main;
