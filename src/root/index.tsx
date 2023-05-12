import React from "react";
import { Route, Routes } from "react-router-dom";
import Generics from "../components/Generics";
import Sidebar from "../components/Sidebar";
import { sidebar } from "../utils/sidebar";

export const Root = () => {
  return (
    <Routes>
      <Route element={<Sidebar />}>
        {sidebar.map((value) => {
          return <Route path={value.path} element={<Generics />} />;
        })}
      </Route>
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default Root;
