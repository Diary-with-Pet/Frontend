import React, { useState } from "react";
import Editor from "./Editor";

import T from "styles/text";
import D from "styles/divs";

const WriteDiary = () => {
  return (
    <div class="diary" style={{ height: "100vh", width: "100%" }}>
      <D.InLineBox left="20">
        <T.MagentaThin size="5" left="1">
          DIARY
        </T.MagentaThin>
      </D.InLineBox>
      <D.FlexBoxColumn>
        <D.FlexBoxRow top="1" left="5" right="10" width={55}>
          <Editor />
        </D.FlexBoxRow>
      </D.FlexBoxColumn>
    </div>
  );
};

export default WriteDiary;
