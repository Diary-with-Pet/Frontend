import React from "react";
import D from "styles/divs";
import T from "styles/text";

const DiaryDetail = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "40rem",
        overflow: "scroll",
        marginTop: "2rem",
      }}
    >
      <D.FlexBoxColumn top={3}>
        <D.FlexBoxRow width="58">
          <div>a</div>
          <button>asad</button>
        </D.FlexBoxRow>
      </D.FlexBoxColumn>
    </div>
  );
};

export default DiaryDetail;
