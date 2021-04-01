import React from "react";

import * as S from "styles/sideMenu";
import { useHistory } from "react-router";
const SideMenu = ({ moveTo, focus }) => {
  const history = useHistory();
  return (
    <S.SideBar>
      <S.MenuIcon onClick={() => moveTo(0)} isFocus={focus === 0}>
        <i className="fas fa-user"></i>
      </S.MenuIcon>
      <S.MenuIcon onClick={() => moveTo(1)} isFocus={focus === 1}>
        <i className="fas fa-dog"></i>
      </S.MenuIcon>
      <S.MenuIcon onClick={() => moveTo(2)} isFocus={focus === 2}>
        <i className="fas fa-list"></i>
      </S.MenuIcon>
      <S.MenuIcon onClick={() => moveTo(3)} isFocus={focus === 3}>
        <i className="fas fa-calendar"></i>
      </S.MenuIcon>
      <S.MenuIcon onClick={() => moveTo(4)} isFocus={focus === 4}>
        <i className="fas fa-pen-nib"></i>
      </S.MenuIcon>
      <S.MenuIcon
        onClick={() => {
          console.log("logout");
          localStorage.removeItem("accessToken");
          history.push("/login");
        }}
      >
        <i className="fas fa-sign-out-alt"></i>
      </S.MenuIcon>
    </S.SideBar>
  );
};

export default SideMenu;
