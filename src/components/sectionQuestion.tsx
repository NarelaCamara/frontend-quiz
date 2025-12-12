import React from "react";
import type { IQuiz, IStep } from "../utils/types";

export const SectionQuestion = ({
  step,
  quiz,
}: {
  step: IStep;
  quiz: IQuiz;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className=" text-[#626C7F] text-[20px] italic p-6">
        Question {step.current} of {step.total}
      </div>

      <div className="text-[#313E51] text-4xl max-w-[465px]">
        <p>{quiz?.questions[step.current - 1].question}</p>
      </div>
    </div>
  );
};
