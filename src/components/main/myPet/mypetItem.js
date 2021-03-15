import React from "react";

import T from "styles/text";
import D from "styles/divs";

import noPicture from "image/no_picture.png";

import { useDispatch, useSelector } from "react-redux";
import { mypetActions } from "modules/mypet";

const MyPetItem = ({ setModalVisivle, setMod, data }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(mypetActions.deleteRequest(data.id));
  };
  return (
    <D.PetContainer>
      <D.FlexBoxRow>
        <D.CircleImage src={data.profile_image || noPicture} />
        <D.InLineBox
          style={{ position: "absolute", left: "15rem", top: "2rem" }}
        >
          <D.FlexBoxRow>
            <T.WhiteBold size={2} right={1}>
              {data.pet_name}
            </T.WhiteBold>
            <i
              className={
                data.gender === 0
                  ? "fas fa-venus"
                  : data.gender === 1
                  ? "fas fa-mars"
                  : "fas fa-question"
              }
              style={{ fontSize: "2rem" }}
            ></i>
            <T.WhiteLight
              size={1}
              left={0.5}
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "7rem",
              }}
            >
              {data.species}
            </T.WhiteLight>
          </D.FlexBoxRow>
          <T.WhiteLight size={1}>{data.birthday}</T.WhiteLight>
          <T.WhiteThin className="container" size={1} top={1}>
            {data.profile}
          </T.WhiteThin>
        </D.InLineBox>
      </D.FlexBoxRow>
      <D.FlexBoxRow
        style={{ position: "absolute", bottom: "1rem", right: "1rem" }}
      >
        <T.WhiteLight
          size={0.5}
          right={1}
          onClick={() => {
            setModalVisivle(true);
            dispatch(mypetActions.setMypetId(data.id));
            setMod({ mod: "edit", data: data });
          }}
        >
          수정하기
        </T.WhiteLight>
        <T.MagentaLight size={0.5} onClick={onDelete}>
          삭제하기
        </T.MagentaLight>
      </D.FlexBoxRow>
    </D.PetContainer>
  );
};

export default MyPetItem;
