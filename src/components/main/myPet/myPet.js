import React from "react";

import T from "styles/text";
import D from "styles/divs";
import B from "styles/buttons";

const MyPet = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <D.InLineBox left="0" top="0">
        <T.MagentaThin size="5" left="1">
          MY PET
        </T.MagentaThin>
        <D.ScrollBox onWheel={(e) => e.stopPropagation()}>
          <D.PetContainer></D.PetContainer>
          <D.PetContainer></D.PetContainer>
          <D.PetContainer></D.PetContainer>
          <D.PetContainer></D.PetContainer>
          <D.PetContainer></D.PetContainer>
          <D.RadiusBox>
            <i class="fas fa-plus"></i>
          </D.RadiusBox>
        </D.ScrollBox>
      </D.InLineBox>
    </div>
  );
};

export default MyPet;
