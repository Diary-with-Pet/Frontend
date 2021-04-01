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
export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ScrollBox = styled.div`
  margin: 0 5rem;
  overflow: scroll;
  overflow-x: hidden;

  width: 71rem;
  height: 30rem;
  background-color: white;
  margin-top: 3rem;

  box-sizing: border-box;
  padding: 3rem;

  display: flex;
  flex-wrap: wrap;

  &::-webkit-scrollbar {
    width: 0.5rem;

    border-radius: 10px;
    background: ${palette.subColor1};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${palette.mainColor};
    border-radius: 10px;
  }
`;

export const AddBtn = styled.button`
  margin: 1rem;
  width: 30rem;
  height: 12rem;
  background-color: white;
  border-radius: 5px;
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${palette.subColor1};

  outline: none;
  border: 3px solid ${palette.subColor1};
  transition: transform 0.2s;

  box-shadow: 2px 2px 3px 0 ${palette.subColor1};
  &:active {
    transform: scale(0.8);
  }
`;

//
//
//item
export const ItemContainer = styled.div`
  margin: 1rem;
  width: 30rem;
  height: 12rem;
  background-color: ${palette.subColor1};
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  position: relative;

  transition: width 2s, height 0.5s;
  &:hover {
    height: 20rem;
    textarea {
      height: 10rem;
      overflow-y: scroll;
    }
  }
`;

export const CircleImage = styled.img`
  width: 9rem;
  height: 9rem;
  border-radius: 100%;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.3);
  margin-left: 2rem;
  object-fit: cover;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 2rem;
  left: 12rem;
`;
export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const PetName = styled.div`
  font-family: "Bold";
  color: ${palette.white};
  font-size: 2rem;
`;
export const BodyArea = styled.textarea`
  font-family: "Thin";
  color: ${palette.white};
  resize: none;

  width: 15rem;
  height: 3rem;
  overflow-y: hidden;
  word-break: break-all;
  transition: width 2s, height 0.5s;
  margin-top: 0.5rem;

  font-size: 1rem;
  margin-left: 1rem;

  outline: none;
  border: none;
  background-color: #00000000;
`;
export const GenderIcon = styled.i`
  font-size: 1.5rem;
  color: ${palette.white};
  margin-left: 1rem;
`;
export const SpeciesBox = styled.p`
  font-family: "Light";
  color: ${palette.white};
  white-space: nowrap;
  overflow: hidden;
  width: 7rem;
  font-size: 1rem;
  margin: 0;
  margin-left: 0.5rem;
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0.5rem;
  right: 1rem;
`;

export const EditButton = styled.button`
  font-family: "Light";
  color: ${palette.white};
  font-size: 0.5rem;
  margin-right: 1rem;
  background-color: #00000000;
  border: none;
`;
export const DeleteButton = styled(EditButton)`
  color: #9e0000;
`;

//
//
//modal

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
  width: 48rem;
  height: 28rem;
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${palette.white};
  box-sizing: border-box;
  padding: 2rem 3rem;

  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BetweenBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const InputWindow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;
export const InputBox = styled.input`
  border: 3px solid ${palette.mainColor};
  width: 25rem;
  height: 3rem;
  font-size: 0.8rem;

  box-sizing: border-box;
  margin: 0.5rem 0;
  padding: 1rem;
  font-size: 1rem;
  font-family: "Light";
  border-radius: 2px;
  border: 1px solid ${palette.mainColor};
  box-shadow: 1px 1px 2px 1px ${palette.mainColor};

  outline: none;
`;

export const MypetSelector = styled.select`
  width: 100%;
  height: 3rem;
  font-size: 1rem;

  box-sizing: border-box;
  margin: 0.5rem 0;
  padding: 1rem;
  font-size: 0.8rem;
  font-family: "Light";
  border-radius: 2px;
  border: 1px solid ${palette.mainColor};
  box-shadow: 1px 1px 2px 1px ${palette.mainColor};

  -webkit-appearance: none;
  background: url(img);

  outline: none;
`;

export const ImageInputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3rem;
`;

export const ImageInputWindow = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: 100%;

  object-fit: cover;
`;

export const NameInput = styled.input`
  width: 10rem;
  height: 2rem;

  font-family: "Light";
  font-size: 1.5rem;
  text-align: center;

  outline: none;
  border: none;
  border-bottom: 1px solid ${palette.mainColor};

  margin-top: 1rem;
`;

export const SubmitBtn = styled.button`
  width: 10rem;
  height: 2rem;
  margin-top: 3rem;
  border-radius: 5px;

  background-color: ${palette.mainColor};
  color: ${palette.white};

  border: none;
  outline: none;

  font-size: 1rem;
  font-family: "Light";
`;

export const ImgInput = styled.input`
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00000000;
`;
