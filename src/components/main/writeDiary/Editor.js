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
    setBody("");
    console.log(text.join(","));
    console.log(image);

    const data = new FormData();
    data.append("title", title);
    data.append("contents", text.join(","));
    data.append("image", image);
    console.log(data);
    setText([]);
    setImage([]);
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
      else img.push(encoding(e.insert.image, img.length));
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
          style={{ width: "60rem", height: "30rem" }}
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
