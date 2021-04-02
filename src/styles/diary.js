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
  display: flex;
  justify-content: center;
  align-items: center;
`;

//
//
//diaryList
export const ListContainer = styled.div`
  width: 100%;
  height: 40rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FlexBoxColumn = styled.div`
  width: 60.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;
export const SpaceBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SelectButton = styled.button`
  background-color: #00000000;
  outline: none;
  border: none;

  font-family: "Light";
  color: ${palette.mainColor};
  &::after {
    content: " |";
    font-weight: bold;
  }

  cursor: pointer;
`;
export const DeleteButton = styled.button`
  margin-right: 1rem;
  background-color: #00000000;
  outline: none;
  border: none;

  font-family: "Bold";
  color: ${palette.mainColor};
  padding: 0;
  cursor: pointer;
`;

export const RoundBtn = styled.button`
  width: 8rem;
  height: 2rem;

  border-radius: 5px;

  background-color: ${palette.mainColor};
  color: ${palette.white};

  border: none;
  outline: none;

  font-size: 0.8rem;
  font-family: "Light";
  cursor: pointer;
`;

export const ListBox = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 30rem;
  overflow-y: scroll;
`;

//
//
//list itme
export const ItemContainer = styled.div`
  width: 60rem;
  height: 4rem;
  border: 3px solid ${palette.mainColor};
  border-radius: 5px;
  margin-top: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 0;
    height: 0;
  }
`;

export const CheckBox = styled.label`
  width: 1.3rem;
  height: 1.3rem;
  margin-left: 2rem;
  border: 2px solid ${palette.mainColor};
  border-radius: 5px;
  color: ${palette.white};
  ${({ isSelected }) =>
    isSelected && {
      backgroundColor: palette.mainColor,
    }}

  text-align:center;
  font-size: 1rem;

  cursor: pointer;
`;

export const ItemTitle = styled.h5`
  font-family: "Bold";
  font-size: 1rem;
  width: 30rem;
  text-align: left;
  color: ${palette.mainColor};
  cursor: pointer;
`;
export const ItemDate = styled.p`
  padding: 0;
  font-family: "Light";
  color: ${palette.mainColor};
  margin-right: 2rem;
`;

//
//
//detail
export const DetailContainer = styled.div`
  width: 100%;
  height: 40rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DateText = styled.div`
  font-size: "Light";
  font-size: 1rem;
  margin-left: 0.5rem;
`;

export const DiaryContainer = styled.div`
  width: 60rem;
  height: 30rem;
  margin: 1rem 0;

  border: 1px solid ${palette.mainColor};
  box-shadow: 2px 2px 5px 0px ${palette.mainColor + "AA"};
  box-sizing: border-box;
  padding: 1rem;
  display: block;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: scroll;

  font-family: "light";
  h1 {
    width: 100%;
    height: 3rem;
  }
  img {
    width: 100%;
  }
  div {
    word-break: break-all;
  }
`;

export const ArrowButton = styled.button`
  width: 6rem;
  height: 2rem;

  border: none;
  background-color: ${palette.mainColor};

  font-family: "Bold";
  color: ${palette.white};
`;
