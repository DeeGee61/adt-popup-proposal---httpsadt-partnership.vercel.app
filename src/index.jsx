import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HttpsAdt } from "./screens/HttpsAdt";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <HttpsAdt />
  </StrictMode>,
);
