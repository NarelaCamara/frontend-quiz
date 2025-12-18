import type { IQuiz, IStep } from "../utils/types";
import { Timer } from "./timer";

export const SectionQuestion = ({
  step,
  quiz,
  setTimeFinished,
}: {
  step: IStep;
  quiz: IQuiz;
  setTimeFinished: (bool: boolean) => void;
}) => {
  return (
    <div className="flex flex-col items-start">
      <div className=" text-[#626C7F] text-[20px] italic pb-6">
        Question {step.current} of {step.total}
      </div>

      <div className="text-[#313E51] text-4xl max-w-[465px] font-medium">
        <p>{quiz?.questions[step.current - 1].question}</p>
      </div>

      <Timer setTimeFinished={setTimeFinished} time={10} />
    </div>
  );
};
