import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import App from "./App";

const rootElement = document.createElement("div");
rootElement.id = "chrome-extension-starter";

document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
