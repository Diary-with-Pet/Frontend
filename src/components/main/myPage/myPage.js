import React from "react";

import T from "styles/text";
import D from "styles/divs";
const MyPage = () => {
  return (
    <D.InLineBox>
      <T.MagentaThin size="5" left="1">
        MY PAGE
      </T.MagentaThin>
      <D.FlexBoxRow left="3" top="1">
        <D.ProfileImage />
        <D.InLineBox>
          <D.FlexBoxRow>
            <T.MagentaLight size="3">이름</T.MagentaLight>
          </D.FlexBoxRow>
          <T.MagentaLight size="3">이름</T.MagentaLight>
          <T.MagentaLight size="3">이름</T.MagentaLight>
        </D.InLineBox>
      </D.FlexBoxRow>
    </D.InLineBox>
  );
};

export default MyPage;
