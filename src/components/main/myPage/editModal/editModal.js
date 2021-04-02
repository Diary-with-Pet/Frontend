import React, { useEffect, useReducer } from "react";

import * as S from "styles/myPage";

import { getAccess } from "api";

const EditModal = ({ setModalVisivle, curData, getMypage }) => {
  const imageReader = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e);
    fileReader.onload = (e) => {
      dispatch({ type: "IMAGE", image: e.target.result });
    };
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "IMAGE_PATH":
        imageReader(action.imagePath);
        return { ...state, imagePath: action.imagePath };
      case "IMAGE":
        return { ...state, image: action.image };
      case "NAME":
        return { ...state, name: action.name };
      case "BODY":
        if (action.body.length > 50) return { ...state };
        return {
          ...state,
          body: action.body,
          bodyLength: action.body.length || 0,
        };
      case "INIT":
        return { ...action.data };
      default:
        return { ...state };
    }
  };

  const [data, dispatch] = useReducer(reducer, {
    image: "",
    imagePath: "",
    name: "",
    body: "",
    bodyLength: 0,
  });

  useEffect(() => {
    console.log(curData);
    dispatch({
      type: "INIT",
      data: {
        image: curData.profile_image || undefined,
        imagePath: curData.profile_image,
        name: curData.username,
        body: curData.profile,
        bodyLength: curData.profile ? curData.profile.length : 0,
      },
    });
  }, [curData]);

  const nameInputHandle = (e) => {
    if (e.target.value.length > 10) {
      alert("이름은 10글자 이내로 작성해주세요.");
      return;
    }
    dispatch({ type: "NAME", name: e.target.value });
  };

  const bodyInputDHandle = (e) => {
    if (e.target.value.length > 800) {
      alert("자기소개는 800글자 이내로 작성이 가능합니다.");
      return;
    }
    dispatch({ type: "BODY", body: e.target.value });
  };

  const editSubmit = () => {
    const formData = new FormData();
    if (curData.username !== data.name) formData.append("username", data.name);
    if (curData.profile_image !== data.imagePath)
      formData.append("profile_image", data.imagePath);
    if (curData.profile !== data.body) {
      const body = data.body.replace(/\n/g, "<br/>");
      formData.append("profile", body);
    }

    getAccess()
      .patch(`/mypage/update/${curData.id}/`, formData)
      .then((e) => setModalVisivle(false))
      .then(() => {
        getMypage();
      })
      .catch((e) => alert("수정에 실패하였습니다."));
  };

  return (
    <>
      <S.BlackOverlay onClick={(e) => setModalVisivle(false)} />
      <S.ModalWhiteBox>
        <label htmlFor="image">
          <S.ImageLabel src={data.image || undefined} />
        </label>
        <S.ImageInput
          id="image"
          type="file"
          accept="image/*"
          files={data.imagePath}
          onChange={(e) => {
            dispatch({ type: "IMAGE_PATH", imagePath: e.target.files[0] });
          }}
        />
        <S.NameInput
          placeholder="이름"
          top="1"
          width="13"
          value={data.name}
          onChange={nameInputHandle}
        />
        <S.BorderArea
          height="15"
          top="1"
          type="text"
          value={data.body}
          onChange={bodyInputDHandle}
        />

        <S.SubmitBtn onClick={editSubmit}>수정완료</S.SubmitBtn>
      </S.ModalWhiteBox>
    </>
  );
};

export default EditModal;
