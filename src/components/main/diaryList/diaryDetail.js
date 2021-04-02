import React, { useState, useEffect, useMemo } from "react";

import * as S from "styles/diary";

import { getAccess } from "api";

const DiaryDetail = ({ setMod, mod, len }) => {
  const [data, setData] = useState({
    id: 75,
    title: "안뇽안뇽!",
    content:
      "hello_contenthello_contenthello_conten,*img*,thello_contenthello_contenthello_contentello_contenthello_contenthello_contentello_contenthello_contenthello_contentello_contenthello_contenthello_contentello_contenthello_contenthello_contentello_contenthello_contenthello_contentello_contenthello_contenthello_contenthello_contenthello_contenthello_contenthello_contenthello_contenthello_contenthello_contenthello_contenthello_contenthello_contenthello_contenthello_contenthello_contenthello_contenthello_contenthello_contenthello_contenthello_contenthello_contenthello_contenthello_contenthello_contenthello_,*img*,content",
    date_created: "2021-04-01",
    images: [
      {
        image:
          "https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg",
      },
      {
        image: "https://www.codingfactory.net/wp-content/uploads/abc.jpg",
      },
    ],
  });
  const content = useMemo(() => data.content.split(","), [data]);
  let imgIndex = -1;
  useEffect(() => {
    getAccess()
      .get(`/diary/${mod}`)
      .then((e) => {
        setData(e.data);
      })
      .catch(() => alert("일기 내용을 불러오느것을 실패하였습니다."));
  }, [mod]);

  const changeId = (id) => {
    setMod(id);
  };

  return (
    <S.DetailContainer>
      <S.FlexBoxColumn>
        <S.SpaceBox>
          <S.DateText>{data.date_created}</S.DateText>
          <S.RoundBtn onClick={() => setMod(-1)}>목록으로</S.RoundBtn>
        </S.SpaceBox>
        <S.DiaryContainer>
          <h1>{data.title}</h1>
          {content.map((e, i) => {
            console.log(data.images);
            if (e === "*img*") {
              imgIndex++;
              // eslint-disable-next-line jsx-a11y/alt-text
              return <img src={data.images[imgIndex].image} />;
            }
            return <div>{e.replace(/\n/g, <br />)}</div>;
          })}
        </S.DiaryContainer>
        <S.SpaceBox>
          <S.ArrowButton onClick={() => changeId(mod - 1)}>{"<"}</S.ArrowButton>
          <S.ArrowButton onClick={() => changeId(mod + 1)}>{">"}</S.ArrowButton>
        </S.SpaceBox>
      </S.FlexBoxColumn>
    </S.DetailContainer>
  );
};

export default DiaryDetail;
