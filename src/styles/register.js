import styled, { createGlobalStyle } from "styled-components";
import palette from "styles/palette";

export const Background = createGlobalStyle`
body{
  background-color:${palette.subColor1};
  display:flex;
  justify-content:center;
}
`;
export const RegisterBox = styled.div`
  width: 15rem;
  margin: 7rem;
  background-color: ${palette.white};
  border-radius: 10px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.5);
  padding: 2rem 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  .link {
    text-decoration: none;
    color: ${palette.mainColor};
    cursor: pointer;
    margin-top: 2rem;
  }
`;
export const Title = styled.h1`
  font-family: "Bold";
  margin: none;
  text-align: center;

  font-size: 2rem;
  color: ${palette.mainColor};
`;

export const RegisterInput = styled.input`
  margin-top: 1rem;
  width: 15rem;
  height: 2rem;
  border: none;
  border-bottom: 1px solid ${palette.mainColor};

  margin-top: ${({ top }) => top}rem;
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
    box-shadow: 0px 0px 5px 0 ${palette.mainColor};
  }
`;

export const RoundBtn = styled.button`
  width: 15rem;
  height: 2rem;
  margin-top: 2rem;

  border-radius: 40px;

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

export const BorderRoundBtn = styled(RoundBtn)`
  margin-top: 1rem;
  background-color: ${palette.white};
  color: ${palette.mainColor};
  border: 1px solid ${palette.mainColor};
`;

export const ImageInputBox = styled.img`
  object-fit: cover;
  width: 10rem;
  height: 13rem;
  border-radius: 5px;
`;
export const ImageInput = styled.input`
  background-color: ${({ src }) => (src ? "#0000000" : palette.mainColor)};
  width: 0;
  height: 0;
  position: absolute;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
`;