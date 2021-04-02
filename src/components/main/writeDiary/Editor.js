import { getAccess } from "api";
import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

import * as S from "styles/diaryWriter";

const Editor = () => {
  const [image, setImage] = useState([]);
  const [text, setText] = useState([]);
  const [body, setBody] = useState("");
  const [title, SetTitle] = useState("");

  const editor = useRef();

  const onSubmit = () => {
    // console.log(text.join(","));
    // console.log(image);
    // console.log(title);

    const data = new FormData();
    for (let img of image) {
      data.append("image", img);
    }
    data.append("title", title);
    data.append("content", text.join(","));

    getAccess()
      .post("/diary/", data)
      .then(() => {
        alert("일기 작성을 완료하였습니다.");
        setBody("");
        setText([]);
        setImage([]);
        SetTitle("");
        let target = document.querySelector(".list");
        target.scrollIntoView({
          behavior: "smooth",
        });
      })
      .catch(() => alert("일기를 저장하지 못했습니다"));
    // console.log(data);
    // setText([]);
    // setImage([]);
  };
  const modules = {
    toolbar: {
      container: [["image"]],
    },
  };

  const encoding = (baseData, num) => {
    let arr = baseData.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], `image_${num}`, { type: mime });
  };

  const onChange = (e) => {
    const txt = [];
    const img = [];
    // eslint-disable-next-line array-callback-return
    e.ops.map((e) => {
      if (typeof e.insert === "string") txt.push(e.insert);
      else {
        img.push(encoding(e.insert.image, img.length));
        txt.push("*img*");
      }
    });
    setText(txt);
    if (image.length <= 3) setImage(img);
    else {
      alert("이미지는 최대 4장까지 가능합니다");
    }
  };

  return (
    <S.EditorContiner>
      <S.TitleInput
        placeholder="제목"
        value={title}
        onChange={(e) => SetTitle(e.target.value)}
      />
      <div className="text-editor">
        <ReactQuill
          ref={editor}
          style={{ width: "60rem", height: "28rem" }}
          modules={modules}
          value={body}
          onChange={(content, delta, source, editor) => {
            setBody(content, delta, source, editor);
            onChange(editor.getContents());
          }}
        />
      </div>
      <S.SubmitBtn onClick={onSubmit}>작성 완료</S.SubmitBtn>
    </S.EditorContiner>
  );
};

export default Editor;
