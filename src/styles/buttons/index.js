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
  border: 2px solid ${palette.magenta};
`;

const MenuIcon = styled.button`
  outline: none;
  border: none;
  color: ${palette.pigPink};
  background-color: ${palette.magenta};

  font-size: 2rem;
  margin-top: 4rem;
`;
const B = { RoundBtn, BorderRoundBtn, MenuIcon };
export default B;
