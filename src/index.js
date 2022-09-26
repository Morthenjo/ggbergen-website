import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import "./i18n.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback="...Loading">
    <HashRouter>
      <App />
    </HashRouter>
  </Suspense>
);
