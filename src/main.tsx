import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes } from "./routes/routes.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className={`bg-cover bg-pattern `}>
      <div className="min-w-[460px] md:min-w-auto md:min-h-auto h-full transition-all duration-500 ease-in-out m-[6%] ">
        <Routes />
      </div>
    </div>
  </StrictMode>
);
