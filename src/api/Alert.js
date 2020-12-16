import React, { useEffect } from "react";
import D from "../styles/divs";
import T from "../styles/text";

const Alert = ({ message, severity, setVisible }) => {
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3500);
  }, []);

  return (
    <D.AlertBox severity={severity}>
      <T.WhiteLight>{message}</T.WhiteLight>
    </D.AlertBox>
  );
};

export default Alert;
