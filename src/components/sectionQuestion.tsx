import type { IQuiz, IStep } from "../utils/types";

export const SectionQuestion = ({
  step,
  quiz,
}: {
  step: IStep;
  quiz: IQuiz;
}) => {
  return (
    <div className="flex flex-col items-start">
      <div className=" text-[#626C7F] text-[20px] italic pb-6">
        Question {step.current} of {step.total}
      </div>

      <div className="text-[#313E51] text-4xl max-w-[465px] font-medium">
        <p>{quiz?.questions[step.current - 1].question}</p>
      </div>
    </div>
  );
};
