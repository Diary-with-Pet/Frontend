import styled from "styled-components";
import palette from "../palette";

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

const I = { LoginInput, ImageInput, BorderArea };
export default I;
