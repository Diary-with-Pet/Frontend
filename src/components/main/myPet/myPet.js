import React, { useEffect, useState } from "react";
import MyPetItem from "./mypetItem";
import MyPetModal from "./myPetModal";

import T from "styles/text";
import D from "styles/divs";
import B from "styles/buttons";

const MyPet = () => {
  const [modalVisible, setModalVisivle] = useState(false);

  useEffect(() => {
    function LimitWheel(e) {
      if (modalVisible) {
        e.preventDefault();
      }
    }
    window.addEventListener("wheel", LimitWheel, {
      passive: false,
    });
    return () => window.removeEventListener("wheel", LimitWheel);
  }, [modalVisible]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <D.InLineBox left="0" top="0">
        <T.MagentaThin size="5" left="1">
          MY PET
        </T.MagentaThin>
        <D.ScrollBox onWheel={(e) => e.stopPropagation()}>
          <MyPetItem />
          <MyPetItem />
          <D.RadiusBox>
            <i className="fas fa-plus"></i>
          </D.RadiusBox>
        </D.ScrollBox>
      </D.InLineBox>
      {modalVisible && <MyPetModal />}
    </div>
  );
};

export default MyPet;
