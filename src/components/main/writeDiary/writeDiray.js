import React, { useState } from "react";
import Editor from "./Editor";

import T from "styles/text";
import D from "styles/divs";

import Alert from "api/Alert";

const WriteDiary = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onHandleError = (text) => {
    setErrorMessage(text);
    setError(true);
  };
  return (
    <div class="diary" style={{ height: "100vh", width: "100%" }}>
      <D.InLineBox left="20">
        <T.MagentaThin size="5" left="1">
          DIARY
        </T.MagentaThin>
      </D.InLineBox>
      <D.FlexBoxColumn>
        <D.FlexBoxRow top="1" left="5" right="10" width={55}>
          <Editor onHandleError={onHandleError} />
        </D.FlexBoxRow>
      </D.FlexBoxColumn>
      {error && (
        <Alert
          severity="warnning"
          message={errorMessage}
          setVisible={setError}
        />
      )}
    </div>
  );
};

export default WriteDiary;
