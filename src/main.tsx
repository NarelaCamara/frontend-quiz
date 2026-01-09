import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes } from "./routes/routes.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className={`bg-cover bg-pattern min-w-[320px]`}>
      <div className="transition-all duration-500 ease-in-out m-[6%]">
        <Routes />
      </div>
    </div>
  </StrictMode>
);
