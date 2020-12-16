import React from "react";
import D from "styles/divs";
import B from "styles/buttons";
const SideMenu = ({ moveTo }) => {
  return (
    <D.SideBar>
      <B.MenuIcon onClick={(e) => moveTo(1000)}>
        <i class="fas fa-user"></i>
      </B.MenuIcon>
      <B.MenuIcon onClick={moveTo(2000)}>
        <i class="fas fa-dog"></i>
      </B.MenuIcon>
      <B.MenuIcon onClick={moveTo(2000)}>
        <i class="fas fa-list"></i>
      </B.MenuIcon>
      <B.MenuIcon onClick={moveTo(2000)}>
        <i class="fas fa-calendar"></i>
      </B.MenuIcon>
      <B.MenuIcon onClick={moveTo(2000)}>
        <i class="fas fa-pen-nib"></i>
      </B.MenuIcon>
    </D.SideBar>
  );
};

export default SideMenu;
