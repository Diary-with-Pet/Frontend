import React from "react";
import D from "styles/divs";
import B from "styles/buttons";
import { useHistory } from "react-router";
const SideMenu = ({ moveTo, focus }) => {
  const history = useHistory();
  return (
    <D.SideBar>
      <B.MenuIcon onClick={() => moveTo(0)} isFocus={focus === 0}>
        <i className="fas fa-user"></i>
      </B.MenuIcon>
      <B.MenuIcon onClick={() => moveTo(1)} isFocus={focus === 1}>
        <i className="fas fa-dog"></i>
      </B.MenuIcon>
      <B.MenuIcon onClick={() => moveTo(2)} isFocus={focus === 2}>
        <i className="fas fa-list"></i>
      </B.MenuIcon>
      <B.MenuIcon onClick={() => moveTo(3)} isFocus={focus === 3}>
        <i className="fas fa-calendar"></i>
      </B.MenuIcon>
      <B.MenuIcon onClick={() => moveTo(4)} isFocus={focus === 4}>
        <i className="fas fa-pen-nib"></i>
      </B.MenuIcon>
      <B.MenuIcon
        onClick={() => {
          localStorage.removeItem("accessToken");
          history.push("/login");
        }}
      >
        <i className="fas fa-sign-out-alt"></i>
      </B.MenuIcon>
    </D.SideBar>
  );
};

export default SideMenu;
