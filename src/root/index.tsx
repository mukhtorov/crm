import React from "react";
import { Route, Routes } from "react-router-dom";
import Generics from "../components/Generics";
import Sidebar from "../components/Sidebar";

export const Root = () => {
  return (
    <Routes>
      <Route element={<Sidebar />}>
        <Route path="/generics" element={<Generics />} />
      </Route>
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default Root;
