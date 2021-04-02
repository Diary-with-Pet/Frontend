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

//
//
//editor
export const EditorContiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Light";
`;
export const TitleInput = styled.input`
  width: 60rem;

  border: 1px solid #ccc;

  margin: 1rem 0;
  font-family: "Bold";
  font-size: 1rem;

  box-sizing: border-box;
  padding: 0.5rem;

  margin-bottom: 1rem;
`;

export const SubmitBtn = styled.button`
  width: 8rem;
  height: 2rem;

  margin-top: 4rem;
  margin-bottom: 1rem;
  border-radius: 5px;

  background-color: ${palette.mainColor};
  color: ${palette.white};

  border: none;
  outline: none;

  font-size: 0.8rem;
  font-family: "Light";
  cursor: pointer;
`;
