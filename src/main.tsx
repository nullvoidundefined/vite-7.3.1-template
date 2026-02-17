import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Application } from "./components/application/application.tsx";

import "./global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Application />
  </StrictMode>,
);
