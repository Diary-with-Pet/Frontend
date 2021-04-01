import React, { useEffect, useMemo, useState } from "react";
import MyPetItem from "./mypetItem";
import MyPetModal from "./myPetModal";

import * as S from "styles/mypet";

import { getAccess } from "api";

const MyPet = () => {
  const [modalVisible, setModalVisivle] = useState(false);
  const [mod, setMod] = useState("craete");
  const [data, setData] = useState();
  const [id, setId] = useState();
  const list = useMemo(() => (data ? data : []), [data]);

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
    getAccess()
      .get("/mypet")
      .then((e) => setData(e.data))
      .catch((e) => alert("펫 목록을 불러오는데 실패하였습니다"));
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <S.Container>
        <S.Title>MY PET</S.Title>
        <S.FlexBox>
          <S.ScrollBox onWheel={(e) => e.stopPropagation()}>
            {list &&
              list.map((e, i) => (
                <MyPetItem
                  key={i}
                  data={e}
                  setModalVisivle={setModalVisivle}
                  setMod={setMod}
                  setId={setId}
                />
              ))}

            <S.AddBtn
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
            </S.AddBtn>
          </S.ScrollBox>
        </S.FlexBox>
      </S.Container>
      {modalVisible && (
        <MyPetModal
          preData={list.filter((e) => e.id === id && id)[0]}
          mod={mod}
          modalVisible={modalVisible}
          setModalVisivle={setModalVisivle}
        />
      )}
    </div>
  );
};

export default MyPet;
