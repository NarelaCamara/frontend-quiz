import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes } from "./routes/routes.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className={`bg-pattern bg-no-repeat`}>
      <div className="min-w-[460px] md:min-w-auto md:min-h-auto transition-all duration-500 ease-in-out">
        <Routes />
      </div>
    </div>
  </StrictMode>
);
