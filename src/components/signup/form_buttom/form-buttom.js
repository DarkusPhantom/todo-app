import React from 'react'
import './form-button.css'
import Alarm from './eventBtn'

function FormBtnSend() {
  return (
    <button className="btn form-btn" id="send" type="submit" onClick={Alarm}>claim your free trial</button>
  );
}

export default FormBtnSend;
