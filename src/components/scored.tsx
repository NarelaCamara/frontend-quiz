import { useNavigate } from "react-router";
import type { IQuiz, IStep } from "../utils/types";
import { colorIcon } from "../utils/utils";

export const Scored = ({
  score,
  quiz,
  step,
}: {
  score: number;
  bg: string;
  quiz: IQuiz;
  step: IStep;
  total: number;
}) => {
  const navigate = useNavigate();
  const bg =
    colorIcon[quiz.title.toLocaleLowerCase() as keyof typeof colorIcon] ||
    "bg-gray-100";

  return (
    <div className="p-6 flex flex-col xl:flex-row justify-around ">
      <div>
        <h2 className="text-[40px]">Quiz completed</h2>
        <h1 className="text-[40px] font-semibold">You scored...</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div
          className={`p-2 xl:p-4 bg-white flex flex-row items-center rounded-xl shadow-md min-w-[564px]`}
        >
          <p>{quiz.title}</p>
          <img
            src={quiz.icon}
            alt="icon"
            className={`p-2 mr-2 xl:p-4 xl:mr-4 ${bg} rounded-xl`}
          />
          <p className="text-[#313E51] text-[144px] font-semibold">{score}</p>

          <div className=" text-[#626C7F] text-[20px] italic">
            out of {step.total}
          </div>
        </div>

        <button
          className={`p-4 mt-10 ${"bg-[#A729F5]  "} text-white rounded-lg cursor-pointer`}
          onClick={() => navigate("/")}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};
