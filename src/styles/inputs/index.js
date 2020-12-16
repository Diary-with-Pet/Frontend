import styled from "styled-components";
import palette from "../palette";

const LoginInput = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  border-bottom: 1px solid ${palette.magenta};

  margin-top: ${(props) => props.top}rem;
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

const I = { LoginInput, ImageInput };
export default I;
