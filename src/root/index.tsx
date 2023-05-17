import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { sidebar } from "../utils/sidebar";

export const Root = () => {
  return (
    <Routes>
      <Route element={<Sidebar />}>
        {sidebar.map((value) => {
          return value.children?.length ? (
            value.children.map((child) => {
              return (
                <Route
                  key={child.path}
                  path={`${value.path}${child.path}`}
                  element={child.element}
                />
              );
            })
          ) : (
            <Route key={value.path} path={value.path} element={value.element} />
          );
        })}
      </Route>
      <Route
        path={"/sozlamalar"}
        element={<Navigate to={"/sozlamalar/umumiy-sozlamalar"} />}
      />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default Root;
