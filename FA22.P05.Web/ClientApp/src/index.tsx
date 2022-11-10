import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";

// This prevents null errors in the root element
const elementId = document.getElementById("root");
if (elementId) {
  const root = createRoot(elementId);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
