import iconError from "../assets/images/icon-error.svg";
import iconSuccess from "../assets/images/icon-correct.svg";
import { useState } from "react";

export const Option = ({
  letter,
  text,
  isCorrect,
  handleSetScore,
}: {
  text: string;
  letter: string;
  isCorrect: boolean;
  handleSetScore: (bool: boolean) => void;
}) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      onClick={() => {
        setSelected(true);
        handleSetScore(isCorrect);
      }}
      className={`${
        !selected
          ? ""
          : isCorrect
          ? "border border-green-500"
          : "border-2 border-red-500"
      } p-4  bg-white flex flex-row items-center rounded-xl shadow-md min-w-[564px] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer   hover:bg-gray-100`}
    >
      <p
        className={` ${
          !selected ? "" : isCorrect ? "bg-green-500" : "bg-red-500"
        } py-2 mr-2 px-4 text-[18px] text-white  rounded-xl`}
      >
        {letter}
      </p>

      {text}

      {selected && (
        <img
          src={isCorrect ? iconSuccess : iconError}
          alt="icon"
          className={`ml-auto w-6 h-6`}
        />
      )}
    </div>
  );
};
