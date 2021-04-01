import React from "react";
import "./formButton.css";
import Alarm from "./events/eventBtn";

function FormBtnSend() {
  return (
    <button className="btn form-btn" id="send" type="submit" onClick={Alarm}>
      claim your free trial
    </button>
  );
}

export default FormBtnSend;
