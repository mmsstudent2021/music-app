import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import Detail from "./pages/Detail"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default App;
