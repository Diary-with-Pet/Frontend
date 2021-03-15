import React, { useState, useEffect } from "react";

import T from "styles/text";
import D from "styles/divs";
import DiaryList from "./diaryList";
import DiaryDetail from "./diaryDetail";
import Alert from "api/Alert";

import { diaryActions } from "modules/diary";

import { useSelector, useDispatch } from "react-redux";

const DiaryContainer = () => {
  const store = useSelector((state) => state.diaryReducer);
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    dispatch(diaryActions.requestList());
  }, []);

  useEffect(() => {
    if (store.reason) {
      setErrorMessage(store.reason);
      setError(true);
    }
  }, [store]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <D.InLineBox left="0" top="0">
        <T.MagentaThin size="5" left="1">
          DIARY
        </T.MagentaThin>
        {store.mod === "list" ? <DiaryList /> : <DiaryDetail />}
      </D.InLineBox>
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

export default DiaryContainer;
