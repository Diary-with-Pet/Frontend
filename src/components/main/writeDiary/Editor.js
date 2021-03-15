import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

import D from "styles/divs";
import B from "styles/buttons";

const Editor = ({ onHandleError }) => {
  const [image, setImage] = useState([]);
  const [text, setText] = useState([]);
  const [body, setBody] = useState("");
  const [tmpBody, setTmpBody] = useState("");
  const editor = useRef();

  const onSubmit = () => {
    setBody("");
    console.log(text.join(","));
    console.log(image);
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
    e.ops.map((e) => {
      if (typeof e.insert === "string") txt.push(e.insert);
      else img.push(encoding(e.insert.image, img.length));
    });
    setText(txt);
    if (image.length <= 3) setImage(img);
    else {
      onHandleError("이미지는 최대 4장까지 가능합니다");
    }
  };

  return (
    <D.FlexBoxColumn style={{ fontFamily: "light", fontSize: "2rem" }}>
      <div className="text-editor">
        <ReactQuill
          ref={editor}
          style={{ width: "60rem", height: "35rem" }}
          modules={modules}
          value={body}
          onChange={(content, delta, source, editor) => {
            setBody(content, delta, source, editor);
            onChange(editor.getContents());
          }}
        />
      </div>
      <B.RoundBtn onClick={onSubmit} top={3} width="10" height="3">
        작성 완료
      </B.RoundBtn>
    </D.FlexBoxColumn>
  );
};

export default Editor;
