import { useState } from "react";

import icon_moon_dark from "../assets/icon-moon-light.svg";
import icon_sun_dark from "../assets/icon-sun-dark.svg";

export const ButtonDarkLightMode = () => {
  const [mode, setMode] = useState("dark");
  return (
    <div className={` ${mode === "light" ? "bg-white" : "bg-black"}   p-2 m-6`}>
      <button
        onClick={() => setMode("dark" === mode ? "light" : "dark")}
        className={` ${
          mode === "light" ? "border-gray-400" : "border-white"
        } border-2 rounded-2xl p-2 m-6`}
      >
        <img src={mode === "light" ? icon_sun_dark : icon_moon_dark} alt="" />
      </button>
    </div>
  );
};
