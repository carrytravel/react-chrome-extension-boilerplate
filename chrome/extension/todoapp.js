import React from "react";
import ReactDOM from "react-dom";
import Root from "../../app/containers/Root";
import "./todoapp.css";

chrome.storage.local.get("state", obj => {
  const { state } = obj;
  const initialState = JSON.parse(state || "{}");
  ReactDOM.render(<Root />, document.querySelector("#root"));
});
