import styled from "styled-components";
import palette from "styles/palette";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
`;

export const Title = styled.p`
  font-family: "Thin";
  color: ${palette.mainColor};
  font-size: 3rem;
  margin: 0;
  margin-left: 1rem;
`;

export const InfoBox = styled.div`
  margin: 5rem 0 0 5rem;
  display: flex;
  align-items: end;
`;

export const ProfileImage = styled.img`
  object-fit: cover;
  width: 20rem;
  height: 26rem;
  border: none;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
`;
export const FlexBoxRow = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.h3`
  font-size: 2rem;
  font-family: "Light";
  margin: 0;
  color: ${palette.mainColor};
`;

export const IconButton = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.subColor1};
  font-size: 1rem;
  margin: 1rem 0 0 0.5rem;
  &:hover {
    color: ${palette.mainColor};
  }
`;

export const EmailText = styled.p`
  font-family: "Light";
  font-size: 1rem;
  margin: 0;
  color: ${palette.subColor1};
`;
export const ContentsText = styled.p`
  font-family: "Light";
  font-size: 1rem;
  margin-top: 2rem;
  color: black;
`;

export const BlackOverlay = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWhiteBox = styled.div`
  width: 25rem;
  height: 35rem;
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${palette.white};
  box-sizing: border-box;
  padding: 2rem;

  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageLabel = styled.img`
  object-fit: cover;
  width: 10rem;
  height: 13rem;
`;
export const ImageInput = styled.input`
  width: 0;
  height: 0;
  position: absolute;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
`;
export const NameInput = styled.input`
  margin-top: 1rem;
  width: 15rem;
  height: 2rem;
  border: none;
  border-bottom: 1px solid ${palette.mainColor};

  font-family: "Light";
  font-size: 1rem;

  box-sizing: border-box;
  padding: 1rem 1rem;

  ::placeholder {
    color: ${palette.subColor1};
  }

  &:focus {
    outline: none;
    border-radius: 3px;
    border: 1px solid ${palette.mainColor};
    box-shadow: 0px 0px 1px 0 ${palette.mainColor};
  }
`;

export const BorderArea = styled.textarea`
  outline: none;

  width: 100%;
  height: 10rem;
  resize: none;
  margin-top: 1rem;

  box-sizing: border-box;
  padding: 1rem;
  font-size: 1rem;
  font-family: "Light";
  border: 1px solid ${palette.mainColor};
  box-shadow: 1px 1px 2px 1px ${palette.mainColor};
`;

export const SubmitBtn = styled.button`
  width: 10rem;
  height: 2rem;
  margin-top: 1rem;

  border-radius: 10px;

  background-color: ${palette.mainColor};
  color: ${palette.white};

  border: none;
  outline: none;

  font-size: 1rem;
  font-family: "Light";

  transition: transform 0.2s;
  &:active {
    transform: scale(0.9);
  }
`;
