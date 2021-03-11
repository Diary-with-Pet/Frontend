import React, { useState, useReducer } from "react";
import Alert from "api/Alert";
import { useDispatch, useSelector } from "react-redux";
import I from "styles/inputs";
import D from "styles/divs";
import B from "styles/buttons";
import noPicture from "image/no_picture.png";

const MyPetModal = ({ mod, modalVisible, setModalVisivle }) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const mypetDispatch = useDispatch();

  const reducer = (state = {}, action) => {
    switch (action.type) {
      case "NAME":
        return { ...state, name: action.name };
      case "SPACIES":
        return { ...state, spacies: action.spacies };
      case "IMAGEPATH":
        imageReader(action.imagePath);
        return { ...state, imagePath: action.imagePath };
      case "IMAGE":
        return { ...state, image: action.image };
      case "GENDER":
        return { ...state, gender: action.gender };
      case "BIRTH":
        return { ...state, birth: action.birth };
      case "BODY":
        return { ...state, body: action.body };
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
  const [data, dispatch] = useReducer(reducer, {
    name: "",
    spacies: "",
    imagePath: "",
    image: "",
    gender: "",
    birth: "",
    body: "",
  });

  const onSubmit = () => {
    const formData = new FormData();
    formData.append("pet_name", data.name);
    formData.append("gender", data.gender);
    formData.append("birthday", data.birth);
    if (data.imagePath) formData.append("profile_image", data.imagePath);
    if (data.body) formData.append("profile", data.body);

    //console.log(mod === "create")
  };

  return (
    <>
      {error && (
        <Alert
          severity="warnning"
          message={errorMessage}
          setVisible={setError}
        />
      )}
      <D.BlackOverlay onClick={(e) => setModalVisivle(false)} />
      <D.ModalWhiteBox width="65" height="40" padding="3rem">
        <D.FlexBoxRow>
          <D.FlexBoxRow width="35" style={{ flexWrap: "wrap" }} top="1">
            생년월일/입양날짜
            <I.MypetInput
              type="date"
              value={data.birth}
              onChange={(e) =>
                dispatch({ type: "BIRTH", birth: e.target.value })
              }
            />
            <I.MypetSelector
              value={data.gender}
              onChange={(e) =>
                dispatch({ type: "GENDER", gender: e.target.value })
              }
            >
              <option value={2}>그 외</option>
              <option value={0}>여</option>
              <option value={1}>남</option>
            </I.MypetSelector>
            <I.MypetInput
              placeholder="종"
              value={data.spacies}
              onChange={(e) =>
                dispatch({ type: "SPACIES", spacies: e.target.value })
              }
            />
            <I.BorderArea placeholder="기타사항" height="10" top="1" />
          </D.FlexBoxRow>
          <D.FlexBoxColumn width="30" height="35">
            <label htmlFor="image">
              <D.ImageInputBox
                width="15"
                height="15"
                radius="200"
                src={data.image ? data.image : noPicture}
              />
            </label>
            <I.ImageInput
              id="image"
              type="file"
              accept="image/*"
              files={data.imagePath}
              onChange={(e) => {
                dispatch({ type: "IMAGEPATH", imagePath: e.target.files[0] });
              }}
            />
            <I.BottomBorderInput placeholder="이름" />
            <B.RoundBtn width="15" height="3" top="2" onClick={onSubmit}>
              {mod === "create" ? "작성완료" : "수정완료"}
            </B.RoundBtn>
          </D.FlexBoxColumn>
        </D.FlexBoxRow>
      </D.ModalWhiteBox>
    </>
  );
};
export default MyPetModal;
