import styled, { createGlobalStyle } from "styled-components";
import palette from "styles/palette";
import Ani from "styles/animation";

const BeigeBackground = createGlobalStyle`
body{
  background-color:${palette.beige};

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

const ShadowBox = styled(Box)`
  border: 1px solid ${palette.magenta};
  box-shadow: 2px 2px 5px 0px rgba(255, 108, 127, 0.8);
  box-sizing: border-box;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: scroll;
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
  left: 0;
  width: 5rem;
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

  z-index: 999;
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
  align-items: center;
  justify-content: space-between;

  @media screen and(max-width:1200) {
    margin: 0;
    align-items: left;
  }
`;
const FlexBoxColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and(max-width:1200) {
    margin: 0;
    align-items: left;
  }
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
  overflow: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(0, 0, 0, 0.5);
`;

const ScrollBox = styled.div`
  margin: 0 5rem;
  overflow: scroll;

  height: 40rem;
  background-color: white;
  margin-top: 3rem;

  box-sizing: border-box;
  padding: 3rem;

  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, minmax(20rem, auto));
  @media screen and (max-width: 1350px) {
    width: 45rem;
    grid-template-columns: repeat(1, minmax(20rem, auto));
  }

  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0.5rem;

    border-radius: 20px;
    background: #d7d7d7;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${palette.magenta};
    border-radius: 20px;
  }
`;

const RadiusBox = styled.div`
  width: 35rem;
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
  width: 35rem;
  height: 15rem;
  background-color: ${palette.pink};
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
  .container {
    width: 15rem;
    height: 5rem;
    overflow-y: hidden;
    word-break: break-all;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &:hover {
    animation: ${Ani.bigHeight} 0.1s 0s 1 running forwards;
    .container {
      height: 15rem;
      overflow-y: scroll;
    }
  }
`;

const DragArea = styled.div`
  width: 18rem;
  height: 38rem;

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

  .container {
    width: 100%;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    margin: 0.5rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
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

const CircleImage = styled.img`
  width: 11rem;
  height: 11rem;
  background-color: black;

  border-radius: 100%;

  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.3);

  position: absolute;
  left: 2rem;
`;

const TodoInput = styled.div`
  font-family: "Thin";

  width: 55rem;
  height: 3rem;
  margin: 0.5rem 10rem;

  border-radius: 20px;
  border: 1px solid ${palette.magenta};
  box-shadow: 3px 3px 2px 0 rgba(255, 108, 127, 0.5);

  position: relative;

  display: flex;
  align-items: center;
  input {
    width: 85%;
    height: 90%;
    outline: none;
    border: none;
    margin: 0 1rem;
  }
  button {
    width: 5rem;
    height: 2rem;
    color: ${palette.white};
    background-color: ${palette.magenta};
    border-radius: 20px;
    outline: none;
    border: none;
    &:active {
      box-shadow: inset 2px 2px 2px 0px rgba(0, 0, 0, 0.5);
    }
  }
`;

const ListItem = styled.div`
  width: 60rem;
  height: 5rem;
  border: 3px solid ${palette.magenta};

  border-radius: 10px;
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 0;
    height: 0;
  }
`;

const Frame = styled.iframe`
  width: 70rem;
  height: 40rem;

  outline: none;
  border: none;

  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;

    border-radius: 20px;
    background: #d7d7d7;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${palette.magenta};
    border-radius: 20px;
  }
`;
const D = {
  BeigeBackground,
  Box,
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
  CircleImage,
  TodoInput,
  ListItem,
  Frame,
  ShadowBox,
};
export default D;
