import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./components/global.css";

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root = document.getElementById("root");

ReactDOM.render(app, root);
