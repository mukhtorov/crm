import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Root from "./root";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Context from "./context";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Context>
          <Root />
        </Context>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
