import React, { useEffect } from "react";
import B from "styles/buttons";
import D from "styles/divs";
import T from "styles/text";
import { useDispatch, useSelector } from "react-redux";
import { diaryActions } from "modules/diary";
import noPicture from "image/no_picture.png";
const DiaryDetail = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.diaryReducer);
  useEffect(() => {
    dispatch(diaryActions.detailRequest(store.id));
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "40rem",
        marginTop: "2rem",
      }}
    >
      <D.FlexBoxColumn top={1}>
        <D.FlexBoxRow width="58">
          <T.BlackThin size={2}>2021-03-13</T.BlackThin>
          <B.RoundBtn
            width={10}
            height={3}
            onClick={() => dispatch(diaryActions.modToList())}
          >
            목록으로
          </B.RoundBtn>
        </D.FlexBoxRow>
        <D.ShadowBox width="60" height="32" top="1" size="1"></D.ShadowBox>
      </D.FlexBoxColumn>
      <D.FlexBoxRow width="60" top="1">
        <B.ArrowBtn>{"<"}</B.ArrowBtn>
        <T.BlakcLight>12/60</T.BlakcLight>
        <B.ArrowBtn>{">"}</B.ArrowBtn>
      </D.FlexBoxRow>
    </div>
  );
};

export default DiaryDetail;
