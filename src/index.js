import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import "./i18n.js";
import Loading from "./Components/Loading";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </HashRouter>
);
