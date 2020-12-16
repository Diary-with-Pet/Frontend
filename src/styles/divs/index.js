import styled, { createGlobalStyle } from "styled-components";
import palette from "styles/palette";
import Ani from "styles/animation";

const BeigeBackground = createGlobalStyle`
body{
  background-color:${palette.beige}
}
`;

const RoundShadowBox = styled.div`
  opacity: 0;
  width: ${({ width }) => width}rem;
  background-color: ${palette.white};
  border-radius: 30px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.5);
  margin: auto;
  margin-top: ${({ top }) => top}rem;
  margin-bottom: 1rem;
  padding: 2rem 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${Ani.bounceIn} 1s 0s 1 running forwards;
`;

const ImageInputBox = styled.img`
  object-fit: cover;
  width: 15rem;
  height: 20rem;
  border-radius: 20px;
`;

const AlertBox = styled.div`
  opacity: 0;
  animation: ${Ani.fadeIn} 1s 0s 1 running forwards;
  position: fixed;
  height: 2rem;
  border-radius: 10px;

  top: 10px;
  left: 30vw;
  right: 30vw;

  text-align: center;
  z-index: 999;

  background-color: ${(props) => {
    switch (props.severity) {
      case "warnning":
        return palette.red;
      default:
        return palette.beige;
    }
  }};

  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SideBar = styled.div`
  width: 7rem;
  height: 100vh;
  background-color: ${palette.magenta};
  box-shadow: 2px 1px 4px 0px rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: 0;
`;

const MainContainer = styled.div`
  display: flex;
`;

const ProfileImage = styled.img`
  object-fit: cover;
  width: 30rem;
  height: 35rem;
  border: none;
`;

const Box = styled.div`
  font-size: ${({ size }) => size}rem;
  margin-top: ${({ top }) => top}rem;
  margin-left: ${({ left }) => left}rem;
  margin-right: ${({ right }) => right}rem;
`;

const InLineBox = styled(Box)`
  display: inline;
`;
const FlexBoxRow = styled(Box)`
  display: flex;
  flex-direction: row;
`;
const D = {
  BeigeBackground,
  RoundShadowBox,
  ImageInputBox,
  AlertBox,
  SideBar,
  MainContainer,
  ProfileImage,
  InLineBox,
  FlexBoxRow,
};
export default D;
