import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AdminSubscriptions } from "./screens/AdminSubscriptions";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AdminSubscriptions />
  </StrictMode>,
);
