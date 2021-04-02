import React from "react";

import * as S from "styles/mypet";

import noPicture from "image/no_picture.png";

import { getAccess } from "api";

const MyPetItem = ({ setModalVisivle, setMod, data, setId, setData }) => {
  const onDelete = () => {
    getAccess()
      .delete(`/mypet/${data.id}/`)
      .then((e) => alert("펫 목록을 삭제하였습니다."))
      .then(() => setData())
      .catch(() => alert("펫 목록 삭제에 실패하였습니다."));
  };
  return (
    <S.ItemContainer>
      <S.InfoContainer>
        <S.CircleImage src={data.profile_image || noPicture} />
        <S.InfoBox>
          <S.FlexBoxRow>
            <S.PetName>{data.pet_name}</S.PetName>
            <S.GenderIcon
              className={
                data.gender === 0
                  ? "fas fa-venus"
                  : data.gender === 1
                  ? "fas fa-mars"
                  : "fas fa-question"
              }
              style={{ fontSize: "2rem" }}
            ></S.GenderIcon>
            <S.SpeciesBox>{data.species}</S.SpeciesBox>
          </S.FlexBoxRow>
          <S.SpeciesBox size={1}>{data.birthday}</S.SpeciesBox>
          <S.BodyArea value={data.profile} readOnly={true}>
            {data.profile}
          </S.BodyArea>
        </S.InfoBox>
      </S.InfoContainer>
      <S.ButtonsBox>
        <S.EditButton
          onClick={() => {
            setModalVisivle(true);
            setId(data.id);
            setMod("edit");
          }}
        >
          수정하기
        </S.EditButton>
        <S.DeleteButton size={0.5} onClick={onDelete}>
          삭제하기
        </S.DeleteButton>
      </S.ButtonsBox>
    </S.ItemContainer>
  );
};

export default MyPetItem;
