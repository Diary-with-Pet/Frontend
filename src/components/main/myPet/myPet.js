import React, { useEffect, useState } from "react";
import MyPetItem from "./mypetItem";
import MyPetModal from "./myPetModal";

import T from "styles/text";
import D from "styles/divs";

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
          <MyPetItem setModalVisivle={setModalVisivle} />
          <D.RadiusBox
            right={0.5}
            left={0.5}
            top={0.5}
            bottom={0.5}
            onClick={() => setModalVisivle("생성")}
          >
            <i className="fas fa-plus"></i>
          </D.RadiusBox>
        </D.ScrollBox>
      </D.InLineBox>
      {modalVisible && (
        <MyPetModal
          modalVisible={modalVisible}
          setModalVisivle={setModalVisivle}
        />
      )}
    </div>
  );
};

export default MyPet;
