import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./organism/Login";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import ManageAccount from "./organism/ManageAccount";

library.add(fas, far);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/manageaccount" element={<ManageAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
