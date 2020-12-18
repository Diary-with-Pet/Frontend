import React, { useState, useMemo } from "react";
import D from "styles/divs";
import I from "styles/inputs";
import B from "styles/buttons";
const EditModal = () => {
  const [imagePath, setImagePath] = useState();
  const [image, setImage] = useState();

  const imageReader = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = (e) => {
      setImage(e.target.result);
    };
  };

  return (
    <>
      <D.BlackOverlay />
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
          <I.LoginInput placeholder="이름" top="1" width="13" />
          <I.BorderArea height="15" top="1" />
          <D.InLineBox>
            <>
              <svg width="3rem" height="3rem">
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  fill="transparent"
                  stroke="gray"
                />
              </svg>
            </>
            <B.RoundBtn top="1" width="12" height="3">
              수정완료
            </B.RoundBtn>
          </D.InLineBox>
        </D.FlexBoxColumn>
      </D.ModalWhiteBox>
    </>
  );
};

export default EditModal;
