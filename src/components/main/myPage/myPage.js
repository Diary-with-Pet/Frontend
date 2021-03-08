import React, { useState, useEffect } from "react";
import { EditModal } from "./editModal";

import T from "styles/text";
import D from "styles/divs";
import B from "styles/buttons";
import { useDispatch, useSelector } from "react-redux";
import { mypageActions } from "modules/mypage";
import Alert from "api/Alert";
const MyPage = () => {
  const [modalVisible, setModalVisivle] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const store = useSelector((state) => state.mypageReducer);

  useEffect(() => {
    dispatch(mypageActions.mypageRequest());
  }, []);

  useEffect(() => {
    if (store.result == "fail") {
      setErrorMessage(store.reason);
      setError(true);
    }
  }, [store]);

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
      {modalVisible && <EditModal setModalVisivle={setModalVisivle} />}
      <D.InLineBox left="0" top="0">
        <T.MagentaThin size="5" left="1">
          MY PAGE
        </T.MagentaThin>
        <D.FlexBoxRow left="5" top="1">
          <D.ProfileImage src={store.profileImage} />
          <D.InLineBox left="2" top="0">
            <D.FlexBoxRow>
              <T.MagentaLight size="3">{store.name}</T.MagentaLight>
              <B.IconButton
                top="1"
                size="1.5"
                left="0.5"
                color="pigPink"
                hover="magenta"
                onClick={() => setModalVisivle(true)}
              >
                <i className="fas fa-edit"></i>
              </B.IconButton>
            </D.FlexBoxRow>
            <T.PigPinkLight size="1.5">{store.email}</T.PigPinkLight>
            <T.BlakcLight size="1.5" top="1">
              {store.body}
            </T.BlakcLight>
          </D.InLineBox>
        </D.FlexBoxRow>
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

export default MyPage;
