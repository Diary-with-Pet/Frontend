import styled, { createGlobalStyle } from "styled-components";
import palette from "styles/palette";
import Ani from "styles/animation";

const BeigeBackground = createGlobalStyle`
body{
  background-color:${palette.beige}
}
`;
const Box = styled.div`
  margin: auto;
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  font-size: ${({ size }) => size}rem;
  margin-top: ${({ top }) => top}rem;
  margin-left: ${({ left }) => left}rem;
  margin-right: ${({ right }) => right}rem;
  margin-bottom: ${({ bottom }) => bottom}rem;
`;

const RoundShadowBox = styled(Box)`
  opacity: 0;
  background-color: ${palette.white};
  border-radius: 30px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.5);
  padding: 2rem 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${Ani.bounceIn} 1s 0s 1 running forwards;
`;

const ImageInputBox = styled.img`
  object-fit: cover;
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  background-color: ${({ img }) => (img ? "white" : palette.beige)};
  border-radius: ${({ radius }) => radius + "px"};
`;

const AlertBox = styled.div`
  opacity: 0;
  animation: ${Ani.fadeInOut} 4s 0s 1 running forwards;

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
      case "alram":
        return palette.pink;
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
  position: sticky;
  top: 0;
  width: 7rem;
  height: 100vh;
  background-color: ${palette.magenta};
  box-shadow: 2px 1px 4px 0px rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: 0;

  box-sizing: border-box;
  padding-bottom: 50px;
`;

const MainContainer = styled.div`
  display: flex;
`;

const ProfileImage = styled.img`
  object-fit: cover;
  width: 25rem;
  height: 33rem;
  border: none;
`;

const InLineBox = styled(Box)`
  display: inline;
`;
const FlexBoxRow = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const FlexBoxColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ModalWhiteBox = styled(Box)`
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${palette.white};
  box-sizing: border-box;
  padding: ${({ padding }) => padding};
  z-index: 999;
`;

const BlackOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);
`;

const ScrollBox = styled.div`
  margin: 0 5rem;
  overflow: scroll;
  width: 80vw;
  height: 40rem;
  background-color: white;
  margin-top: 3rem;

  box-sizing: border-box;
  padding: 3rem;

  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(28rem, auto));
`;

const RadiusBox = styled.div`
  width: 30rem;
  height: 15rem;
  background-color: ${palette.beige};
  border-radius: 10px;
  font-size: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const PetContainer = styled(RadiusBox)`
  background-color: ${palette.pink};
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.5);
  display: flex;
`;

const DragArea = styled.div`
  width: 18rem;
  height: 40rem;
  background-color: ${({ type }) => {
    switch (type) {
      case "todo":
        return palette.pigPink;
      case "progress":
        return palette.pink;
      case "done":
        return palette.beige;
      default:
        return;
    }
  }};

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;

  color: white;
  font-family: "Thin";
  font-size: 3rem;
`;

const DragItem = styled.div`
  width: 15rem;
  margin: 0 0.5rem;
  color: black;
  font-size: 2rem;
  border-radius: 10px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  padding: 0.3rem 1rem;
  text-align: center;
  background-color: ${palette.white};
  margin: 0.5rem 0;
`;

const TextArea = styled.textarea`
  height: 3rem;
  font-family: "Thin";
  font-size: 2rem;
  color: black;
  outline: none;
  border: none;
  resize: none;
  cursor: ${({ readOnly }) => (readOnly ? "default" : "text")};
  &::-webkit-scrollbar {
    display: none;
  }
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
  ModalWhiteBox,
  BlackOverlay,
  FlexBoxColumn,
  ScrollBox,
  RadiusBox,
  PetContainer,
  DragArea,
  DragItem,
  TextArea,
};
export default D;
