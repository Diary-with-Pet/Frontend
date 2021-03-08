import React, { useState, useEffect, useReducer } from "react";
import D from "styles/divs";
import I from "styles/inputs";
import B from "styles/buttons";
import Alert from "api/Alert";

import CircleProgress from "api/CircleProgress";
import { useDispatch, useSelector } from "react-redux";
import { mypageActions } from "modules/mypage";

const EditModal = ({ setModalVisivle }) => {
  const [error, setError] = useState(false);
  const modalDispatch = useDispatch();
  const store = useSelector((state) => state.mypageReducer);

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
        const body = action.body.replace(/\n/g, "<br/>");
        return { ...state, body: action.body, bodyLength: action.body.length };
      default:
        return { ...state };
    }
  };

  useEffect(() => {
    modalDispatch(mypageActions.mypageRequest());
  }, []);

  const [data, dispatch] = useReducer(reducer, {
    image: store.profileImage,
    imagePath: store.profileImage,
    name: store.name,
    body: store.body,
    bodyLength: store.body ? store.body.length : 0,
  });

  function imageReader(e) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e);
    fileReader.onload = (e) => {
      dispatch({ type: "IMAGE", image: e.target.result });
    };
  }

  const nameInputHandle = (e) => {
    if (e.target.value.length > 10) {
      setError(true);
      return;
    }
    dispatch({ type: "NAME", name: e.target.value });
  };

  const bodyInputDHandle = (e) => {
    if (e.target.value.length > 800) return;
    dispatch({ type: "BODY", body: e.target.value });
  };
  return (
    <>
      <D.BlackOverlay onClick={(e) => setModalVisivle(false)} />
      <D.ModalWhiteBox width="30" height="43" padding="2rem">
        <D.FlexBoxColumn>
          <label htmlFor="image">
            <D.ImageInputBox
              src={data.image}
              width="12"
              height="15"
              radius="20"
            />
          </label>
          <I.ImageInput
            id="image"
            type="file"
            accept="image/*"
            files={data.imagePath}
            onChange={(e) => {
              dispatch({ type: "IMAGE_PATH", imagePath: e.target.files[0] });
            }}
          />
          <I.LoginInput
            placeholder="이름"
            top="1"
            width="13"
            value={data.name}
            onChange={nameInputHandle}
          />
          <I.BorderArea
            height="15"
            top="1"
            value={data.body}
            onChange={bodyInputDHandle}
          />
          <D.FlexBoxRow width="25">
            <D.FlexBoxRow width="5" style={{ margin: "0" }}>
              <CircleProgress max="800" cur={data.bodyLength} />
              <p style={{ margin: "1.5rem 0" }}>{data.bodyLength}/800</p>
            </D.FlexBoxRow>
            <B.RoundBtn
              top="1"
              width="12"
              height="3"
              onClick={() => {
                modalDispatch(mypageActions.editRequest(data));
                setModalVisivle(false);
              }}
            >
              수정완료
            </B.RoundBtn>
          </D.FlexBoxRow>
        </D.FlexBoxColumn>
      </D.ModalWhiteBox>
      {error && (
        <Alert
          severity="warnning"
          message={"이름은 10글자까지 설정 가능합니다."}
          setVisible={setError}
        />
      )}
    </>
  );
};

export default EditModal;
