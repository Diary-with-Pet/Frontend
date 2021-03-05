import React, { useState } from "react";
import { EditModal } from "./editModal";

import T from "styles/text";
import D from "styles/divs";
import B from "styles/buttons";

const MyPage = () => {
  const [modalVisible, setModalVisivle] = useState(false);
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      {modalVisible && <EditModal setModalVisivle={setModalVisivle} />}
      <D.InLineBox left="0" top="0">
        <T.MagentaThin size="5" left="1">
          MY PAGE
        </T.MagentaThin>
        <D.FlexBoxRow left="5" top="1">
          <D.ProfileImage />
          <D.InLineBox left="2" top="0">
            <D.FlexBoxRow>
              <T.MagentaLight size="3">이름</T.MagentaLight>
              <B.IconButton
                top="1"
                size="1.5"
                left="0.5"
                color="pigPink"
                hover="magenta"
                onClick={() => setModalVisivle(true)}
              >
                <i className="fas fa-edit"></i>
              </B.IconButton>
            </D.FlexBoxRow>
            <T.PigPinkLight size="1.5">이메일</T.PigPinkLight>
            <T.BlakcLight size="1.5" top="1">
              자기소개
            </T.BlakcLight>
          </D.InLineBox>
        </D.FlexBoxRow>
      </D.InLineBox>
    </div>
  );
};

export default MyPage;
