import styled from "styled-components";
import palette from "../palette";

const Text = styled.div`
  cursor: default;
  font-size: ${({ size }) => size}rem;
  margin-top: ${({ top }) => top}rem;
  margin-left: ${({ left }) => left}rem;
  margin-right: ${({ right }) => right}rem;
  margin-bottom: ${({ bottom }) => bottom}rem;
`;

const Title = styled.h1`
  font-family: "Bold";
  margin: none;
  text-align: center;

  font-size: 3rem;
  color: ${palette.magenta};
`;

const WhiteBold = styled(Text)`
  font-family: "Bold";
  color: ${palette.white};
`;
const WhiteLight = styled(Text)`
  font-family: "Light";
  color: ${palette.white};
`;
const MagentaThin = styled(Text)`
  font-family: "Thin";
  color: ${palette.magenta};
`;
const MagentaLight = styled(Text)`
  font-family: "Light";
  color: ${palette.magenta};
`;
const PigPinkLight = styled(Text)`
  font-family: "Light";
  color: ${palette.pigPink};
`;

const BlakcLight = styled(Text)`
  font-family: "Light";
  color: black;
`;

const BlackThin = styled(Text)`
  font-family: "Thin";
  color: black;
`;

const T = {
  Title,
  WhiteBold,
  WhiteLight,
  MagentaThin,
  MagentaLight,
  PigPinkLight,
  BlakcLight,
  BlackThin,
};
export default T;
