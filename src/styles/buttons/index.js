import styled from "styled-components";
import palette from "styles/palette";
import Ani from "styles/animation";

const RoundBtn = styled.button`
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  margin-top: ${({ top }) => top}rem;

  border-radius: 40px;

  background-color: ${palette.magenta};
  color: ${palette.white};

  border: none;
  outline: none;

  font-size: 1rem;
  font-family: "Light";

  &:focus {
    animation: ${Ani.rubberBand} 1s 0s 1 running;
  }
`;

const BorderRoundBtn = styled(RoundBtn)`
  background-color: ${palette.white};
  color: ${palette.magenta};
  border: 1px solid ${palette.magenta};
`;

const MenuIcon = styled.button`
  outline: none;
  border: none;
  color: ${({ isFocus }) => (isFocus ? palette.white : "#ffbfca")};
  background-color: ${palette.magenta};

  font-size: 2rem;
  margin-top: 4rem;
`;

const IconButton = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ color }) => {
    switch (color) {
      case "pigPink":
        return palette.pigPink;
      case "beige":
        return palette.beige;
      default:
        return;
    }
  }};
  font-size: ${({ size }) => size}rem;
  margin-top: ${({ top }) => top}rem;
  margin-left: ${({ left }) => left}rem;
  margin-right: ${({ right }) => right}rem;
  margin-bottom: ${({ bottom }) => bottom}rem;

  &:hover {
    color: ${({ hover }) => {
      switch (hover) {
        case "pigPink":
          return palette.pigPink;
        case "magenta":
          return palette.magenta;
        case "red":
          return palette.red;
        default:
          return;
      }
    }};
  }
`;
const B = { RoundBtn, BorderRoundBtn, MenuIcon, IconButton };
export default B;
