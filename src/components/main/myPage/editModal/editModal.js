import React, { useState, useMemo } from "react";
import D from "styles/divs";
import I from "styles/inputs";
import B from "styles/buttons";
import Alert from "api/Alert";
import CircleProgress from "api/CircleProgress";
const EditModal = ({ setModalVisivle }) => {
  const [imagePath, setImagePath] = useState();
  const [image, setImage] = useState();
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(false);
  const bodyLength = useMemo(() => body.length, [body]);

  const imageReader = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = (e) => {
      setImage(e.target.result);
    };
  };

  const nameInputHandle = (e) => {
    if (e.target.value.length > 10) {
      setError(true);
      return;
    }
    setName(e.target.value);
  };

  const bodyInputDHandle = (e) => {
    if (e.target.value.length > 800) return;
    setBody(e.target.value);
  };
  return (
    <>
      <D.BlackOverlay onClick={(e) => setModalVisivle(false)} />
      <D.ModalWhiteBox width="30" height="43" padding="2rem">
        <D.FlexBoxColumn>
          <label htmlFor="image">
            <D.ImageInputBox
              src={image}
              width="12"
              height="15"
              img={imagePath !== null}
            />
          </label>
          <I.ImageInput
            src={image}
            id="image"
            type="file"
            accept="image/*"
            files={imagePath}
            onChange={(e) => {
              setImagePath(e.target.files[0]);
              imageReader(e);
            }}
          />
          <I.LoginInput
            placeholder="이름"
            top="1"
            width="13"
            value={name}
            onChange={nameInputHandle}
          />
          <I.BorderArea
            height="15"
            top="1"
            value={body}
            onChange={bodyInputDHandle}
          />
          <D.FlexBoxRow width="25">
            <D.FlexBoxRow width="5" style={{ margin: "0" }}>
              <CircleProgress max="800" cur={bodyLength} />
              <text style={{ margin: "1.5rem 0" }}>{bodyLength}/800</text>
            </D.FlexBoxRow>
            <B.RoundBtn top="1" width="12" height="3">
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
