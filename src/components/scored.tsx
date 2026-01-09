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
    <div className="flex flex-col justify-center gap-4 px-[2%]">
      <div>
        <h2 className="text-[40px] font-extralight text-[#313E51]">
          Quiz completed
        </h2>
        <h1 className="text-[40px] font-medium">You scored...</h1>
      </div>

      <div className="flex flex-col">
        <div
          className={`p-12 bg-white  rounded-xl shadow-md  flex flex-col items-center   `}
        >
          <div className="flex flex-row items-center justify-center gap-4 w-full">
            <Icon icon={quiz?.icon} title={quiz?.title} />
            <p className="text-[#313E51] text-[28px] font-medium">
              {quiz.title}
            </p>
          </div>
          <p className="text-[#313E51] text-[144px] font-semibold">{score}</p>

          <div className=" text-[#626C7F] text-[20px] italic">
            out of {step.total}
          </div>
        </div>

        <button
          className={`p-4 mt-12  bg-[#A729F5] w-full text-white rounded-lg cursor-pointer`}
          onClick={() => {
            setStep({ current: 1, total: step.total, end: false });
          }}
        >
          Play Again
        </button>

        <button
          className={`p-4 mt-4 ${"bg-white  "} border-2 border-[#A729F5] w-full text-[#A729F5] rounded-lg cursor-pointer`}
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};
