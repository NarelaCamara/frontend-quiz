import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Routes } from "./routes/routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-w-[460px] md:min-w-auto md:min-h-auto transition-all duration-500 ease-in-out">
      <Routes />
    </div>
  </StrictMode>
);
