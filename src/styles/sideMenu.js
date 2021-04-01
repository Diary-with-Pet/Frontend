import styled from "styled-components";
import palette from "styles/palette";

export const SideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 5rem;
  height: 100vh;
  background-color: ${palette.mainColor};
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

export const MenuIcon = styled.button`
  outline: none;
  border: none;
  color: ${({ isFocus }) => (isFocus ? palette.white : palette.subColor1)};
  background-color: ${palette.mainColor};

  font-size: 2rem;
  margin: 0 2rem;
  margin-top: 4rem;
`;
