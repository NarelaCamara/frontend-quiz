import { useNavigate } from "react-router";
import type { IQuiz, IStep } from "../utils/types";
import { Icon } from "./icon";

export const Scored = ({
  score,
  quiz,
  step,
  setStep,
}: {
  score: number;
  quiz: IQuiz;
  step: IStep;
  setStep: (step: IStep) => void;
}) => {
  const navigate = useNavigate();

  return (
    <div className="p-6 flex flex-col xl:flex-row justify-around min-w-[300px]">
      <div>
        <h2 className="text-[40px]">Quiz completed</h2>
        <h1 className="text-[40px] font-semibold">You scored...</h1>
      </div>
      <div className="">
        <div
          className={`p-2 xl:p-4 bg-white  rounded-xl shadow-md flex flex-col items-center`}
        >
          <div className="flex flex-row p-2 items-center gap-4">
            <Icon icon={quiz?.icon} title={quiz?.title} />
            <p>{quiz.title}</p>
          </div>
          <p className="text-[#313E51] text-[144px] font-semibold">{score}</p>

          <div className=" text-[#626C7F] text-[20px] italic">
            out of {step.total}
          </div>
        </div>

        <button
          className={`p-4 mt-10 ${"bg-[#A729F5]  "} w-full text-white rounded-lg cursor-pointer`}
          onClick={() => {
            setStep({ current: 1, total: step.total, end: false });
          }}
        >
          Play Again
        </button>

        <button
          className={`p-4 mt-10 ${"bg-white  "} border-2 border-[#A729F5] w-full text-[#A729F5] rounded-lg cursor-pointer`}
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};
