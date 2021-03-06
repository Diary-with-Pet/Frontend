import React, { useState } from "react";
import Alert from "api/Alert";

import T from "styles/text";
import D from "styles/divs";

const MyPetModal = () => {
  const [modalVisible, setModalVisivle] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      {error && (
        <Alert
          severity="warnning"
          message={errorMessage}
          setVisible={setError}
        />
      )}
      <D.BlackOverlay onClick={(e) => setModalVisivle(false)} />
      <D.ModalWhiteBox width="30" height="43" padding="2rem"></D.ModalWhiteBox>
    </>
  );
};
export default MyPetModal;
