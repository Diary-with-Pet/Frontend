import styled from "styled-components";
import palette from "styles/palette";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 5rem;
`;

export const Title = styled.p`
  font-family: "Thin";
  color: ${palette.mainColor};
  font-size: 3rem;
  margin: 0;
  margin-left: 1rem;
`;

export const FlexBox = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const TodoInputBox = styled.div`
  font-family: "Thin";

  border: 1px solid ${palette.mainColor + "99"};
  border-radius: 5px;
  width: 55rem;
  height: 3rem;
  box-shadow: 3px 3px 2px 0 ${palette.mainColor + "99"};
  display: flex;
  align-items: center;

  input {
    width: 48rem;
    outline: none;
    border: none;
    margin: 0 1rem;
  }
  button {
    width: 5rem;
    height: 2rem;
    color: ${palette.white};
    background-color: ${palette.mainColor};
    border-radius: 5px;
    outline: none;
    border: none;
    transition: transform 1s;
    &:active {
      transform: scale(0.8);
    }
    margin-right: 0.5rem;
  }
`;
export const DragAreaBox = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const DragArea = styled.div`
  width: 18rem;
  height: 33rem;

  background-color: ${({ type }) => {
    switch (type) {
      case "todo":
        return palette.mainColor;
      case "progress":
        return palette.subColor2;
      case "done":
        return palette.subColor1;
      default:
        return;
    }
  }};

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;

  color: white;
  font-family: "Thin";
  font-size: 3rem;
  margin: 0rem 0.3rem;
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
export const ListName = styled.h5`
  margin: 0;
  font-family: "Thin";
  color: ${palette.white};
  font-weight: 100;
`;

//
//
//item

export const DragItem = styled.div`
  width: 15rem;
  height: 3rem;
  margin: 0 0.5rem;
  color: black;
  font-size: 2rem;
  border-radius: 5px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  padding: 0.3rem 1rem;
  text-align: center;
  background-color: ${palette.white};
  margin: 0.5rem 0;
`;

export const DragContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FlexBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const TextArea = styled.textarea`
  height: 2rem;
  font-family: "Thin";
  font-size: 1.5rem;
  color: black;
  outline: none;
  border: none;
  resize: none;
  cursor: ${({ readOnly }) => (readOnly ? "default" : "text")};
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const IconButton = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${palette.subColor1};

  transition: transform 0.5s;
  &:active {
    transform: scale(0.3);
  }

  margin-right: 0.5rem;
`;
