import React, { useEffect, useMemo, useState } from "react";
import MyPetItem from "./mypetItem";
import MyPetModal from "./myPetModal";
import Alert from "api/Alert";
import T from "styles/text";
import D from "styles/divs";

import { useDispatch, useSelector } from "react-redux";
import { mypetActions } from "modules/mypet";

const MyPet = () => {
  const [modalVisible, setModalVisivle] = useState(false);
  const [mod, setMod] = useState("craete");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const store = useSelector((state) => state.mypetReducer);
  const list = useMemo(() => store.list, [store]);

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

  useEffect(() => {
    dispatch(mypetActions.listRequest());
  }, []);

  useEffect(() => {
    if (store.result === "fail") {
      setErrorMessage(store.reason);
      setError(true);
    }
  }, [store]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <D.InLineBox left="0" top="0">
        <T.MagentaThin size="5" left="1">
          MY PET
        </T.MagentaThin>
        <D.ScrollBox onWheel={(e) => e.stopPropagation()}>
          {list &&
            list.map((e, i) => (
              <MyPetItem
                key={i}
                data={e}
                setModalVisivle={setModalVisivle}
                setMod={setMod}
              />
            ))}
          <D.RadiusBox
            right={0.5}
            left={0.5}
            top={0.5}
            bottom={0.5}
            onClick={() => {
              setMod("create");
              setModalVisivle(true);
            }}
          >
            <i className="fas fa-plus"></i>
          </D.RadiusBox>
        </D.ScrollBox>
      </D.InLineBox>
      {modalVisible && (
        <MyPetModal
          mod={mod}
          modalVisible={modalVisible}
          setModalVisivle={setModalVisivle}
        />
      )}
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

export default MyPet;
