import styled from "styled-components";
import palette from "../palette";
import img from "../arrowImage.jpg";

const LoginInput = styled.input`
  width: ${({ width }) => (width ? width + "rem" : "100%")};
  height: 3rem;
  border: none;
  border-bottom: 1px solid ${palette.magenta};

  margin-top: ${({ top }) => top}rem;
  font-family: "Light";
  font-size: 1.5rem;

  box-sizing: border-box;
  padding: 1rem 1rem;

  ::placeholder {
    color: ${palette.beige};
  }

  &:focus {
    outline: none;
    border-radius: 10px;
    border: 1px solid ${palette.magenta};
    box-shadow: 0px 0px 5px 0 ${palette.magenta};
  }
`;

const ImageInput = styled.input`
  width: 0;
  height: 0;
  position: absolute;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
`;

const BorderArea = styled.textarea`
  outline: none;

  width: 100%;
  height: ${({ height }) => height}rem;
  resize: none;
  margin-top: ${({ top }) => top}rem;
  margin-left: ${({ left }) => left}rem;
  margin-right: ${({ right }) => right}rem;
  margin-bottom: ${({ bottom }) => bottom}rem;

  box-sizing: border-box;
  padding: 1rem;
  font-size: 1rem;
  font-family: "Light";
  border-radius: 10px;
  border: 1px solid ${palette.magenta};
  box-shadow: 1px 1px 2px 1px ${palette.magenta};
`;

const MypetInput = styled.input`
  border: 3px solid ${palette.magenta};
  width: 100%;
  height: 4rem;
  font-size: 1rem;

  box-sizing: border-box;
  margin: 0.5rem 0;
  padding: 1rem;
  font-size: 1rem;
  font-family: "Light";
  border-radius: 10px;
  border: 1px solid ${palette.magenta};
  box-shadow: 1px 1px 2px 1px ${palette.magenta};

  outline: none;
`;
const MypetSelector = styled.select`
  width: 100%;
  height: 4rem;
  font-size: 1rem;

  box-sizing: border-box;
  margin: 0.5rem 0;
  padding: 1rem;
  font-size: 1rem;
  font-family: "Light";
  border-radius: 10px;
  border: 1px solid ${palette.magenta};
  box-shadow: 1px 1px 2px 1px ${palette.magenta};

  -webkit-appearance: none;
  background: url(img);

  outline: none;
`;

const BottomBorderInput = styled.input`
  width: 20rem;
  height: 3rem;

  font-family: "Light";
  font-size: 2.5rem;
  text-align: center;

  outline: none;
  border: none;
  border-bottom: 3px solid ${palette.magenta};

  margin-top: 3rem;
`;

const CheckBox = styled.label`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 2rem;
  border: 3px solid ${palette.magenta};
  border-radius: 5px;
  color: ${palette.white};
  ${({ isChecked }) =>
    isChecked && {
      backgroundColor: palette.magenta,
    }}

  text-align:center;
`;
const I = {
  LoginInput,
  ImageInput,
  BorderArea,
  MypetInput,
  MypetSelector,
  BottomBorderInput,
  CheckBox,
};
export default I;
