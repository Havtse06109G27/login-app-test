import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

export default function ConfigRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}
