import iconError from "../assets/images/icon-error.svg";
import iconSuccess from "../assets/images/icon-correct.svg";
import { useState } from "react";

export const Option = ({
  letter,
  text,
  isCorrect,
}: {
  text: string;
  letter: string;
  isCorrect: boolean;
}) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      onClick={() => setSelected(true)}
      className={`${
        !selected
          ? "bg-gray-200"
          : isCorrect
          ? "border border-green-500"
          : "border border-red-500"
      } p-2 xl:p-4 bg-white flex flex-row items-center rounded-xl shadow-md min-w-[564px] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer   hover:bg-gray-100`}
    >
      <p className={`p-2 mr-2 xl:p-4 xl:mr-4 bg-gray-200 rounded-xl`}>
        {letter}
      </p>

      {text}

      {selected && (
        <img
          src={isCorrect ? iconSuccess : iconError}
          alt="icon"
          className={`p-2 mr-2 xl:p-4 xl:mr-4 rounded-xl`}
        />
      )}
    </div>
  );
};
