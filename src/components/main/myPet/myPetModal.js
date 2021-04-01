import React, { useReducer } from "react";
import * as S from "styles/mypet";
import noPicture from "image/no_picture.png";
import { getAccess } from "api";

const MyPetModal = ({ preData, mod, setModalVisivle }) => {
  const reducer = (state = {}, action) => {
    switch (action.type) {
      case "NAME":
        return { ...state, pet_name: action.pet_name };
      case "SPECIES":
        return { ...state, species: action.species };
      case "IMAGEPATH":
        imageReader(action.profile_image);
        return { ...state, profile_image: action.profile_image };
      case "IMAGE":
        return { ...state, image: action.image };
      case "GENDER":
        return { ...state, gender: action.gender };
      case "BIRTH":
        return { ...state, birthday: action.birthday };
      case "BODY":
        return { ...state, profile: action.profile };
      default:
        return state;
    }
  };

  const imageReader = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e);
    fileReader.onload = (e) => {
      dispatch({ type: "IMAGE", image: e.target.result });
    };
  };
  const [data, dispatch] = useReducer(reducer, mod === "create" ? {} : preData);
  console.log();

  const editSubmit = () => {
    const formData = new FormData();
    if (preData.pet_name !== data.pet_name)
      formData.append("pet_name", data.pet_name);
    if (preData.gender !== data.gender) formData.append("gender", data.gender);
    if (preData.birthday !== data.birthday)
      formData.append("birthday", data.birthday);
    if (preData.species !== data.species)
      formData.append("species", data.species);
    if (preData.profile_image)
      formData.append("profile_image", data.profile_image);
    if (preData.profile !== data.profile)
      formData.append("profile", data.profile);

    getAccess()
      .patch(`/mypet/${preData.id}`, formData)
      .then(() => alert("펫 정보가 업데이트 되었습니다."))
      .catch(() => alert("펫 정보 수정에 실패하였습니다"));

    setModalVisivle(false);
  };

  const createSubmit = () => {
    const formData = new FormData();
    formData.append("pet_name", data.pet_name);
    formData.append("gender", data.gender);
    formData.append("birthday", data.birthday);
    formData.append("species", data.species);
    formData.append("profile_image", data.profile_image);
    formData.append("profile", data.profile);

    getAccess()
      .post("/mypet/", formData)
      .then(() => alert("새로운 펫 정보가 업데이트 되었습니다."))
      .catch(() => alert("새로운 펫 정보 추가에 실패하였습니다"));

    setModalVisivle(false);
  };

  return (
    <>
      <S.BlackOverlay onClick={(e) => setModalVisivle(false)} />
      <S.ModalWhiteBox>
        <S.BetweenBox>
          <S.InputWindow>
            생년월일/입양날짜
            <S.InputBox
              type="date"
              value={data.birthday}
              onChange={(e) =>
                dispatch({ type: "BIRTH", birthday: e.target.value })
              }
            />
            성별
            <S.MypetSelector
              value={data.gender}
              onChange={(e) =>
                dispatch({ type: "GENDER", gender: e.target.value })
              }
            >
              <option value={2}>그 외</option>
              <option value={0}>여</option>
              <option value={1}>남</option>
            </S.MypetSelector>
            종
            <S.InputBox
              placeholder="종"
              value={data.species}
              onChange={(e) =>
                dispatch({ type: "SPECIES", species: e.target.value })
              }
            />
            기타사항
            <S.InputBox
              placeholder="기타사항"
              height="10"
              top="1"
              value={data.profile}
              onChange={(e) =>
                dispatch({ type: "BODY", profile: e.target.value })
              }
            />
          </S.InputWindow>
          <S.ImageInputBox width="30" height="35">
            <label htmlFor="image">
              <S.ImageInputWindow
                width="15"
                height="15"
                radius="200"
                src={data.image ? data.image : noPicture}
              />
            </label>
            <S.ImgInput
              id="image"
              type="file"
              accept="image/*"
              files={data.profile_image}
              onChange={(e) => {
                dispatch({
                  type: "IMAGEPATH",
                  profile_image: e.target.files[0],
                });
              }}
            />
            <S.NameInput
              placeholder="이름"
              value={data.pet_name}
              onChange={(e) => {
                dispatch({ type: "NAME", pet_name: e.target.value });
              }}
            />
            <S.SubmitBtn
              width="15"
              height="3"
              top="2"
              onClick={mod === "create" ? createSubmit : editSubmit}
            >
              {mod === "create" ? "작성완료" : "수정완료"}
            </S.SubmitBtn>
          </S.ImageInputBox>
        </S.BetweenBox>
      </S.ModalWhiteBox>
    </>
  );
};

export default MyPetModal;
