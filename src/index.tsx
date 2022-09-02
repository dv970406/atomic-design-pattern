import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { NextUIProvider } from "@nextui-org/react";
import { css, Global } from "@emotion/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const style = css`
  body {
    margin: 0;
    padding: 0;
  }
`;
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <Global styles={style} />
      <App />
    </NextUIProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
