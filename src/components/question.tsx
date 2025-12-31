import { useState } from "react";
import type { IQuiz, IStateQuestion, IStep } from "../utils/types";
import { AnswerState } from "../utils/utils";
import { SectionQuestion } from "./sectionQuestion";
import { SectionAnswer } from "./sectionAnswer";

export const Question = ({
  step,
  quiz,
  setStep,
  sumCorrect,
}: {
  step: IStep;
  quiz: IQuiz;
  setStep: (step: IStep) => void;
  sumCorrect: (bool: boolean) => void;
}) => {
  const [stateQuestion, setStateQuestion] = useState<IStateQuestion>({
    state: AnswerState.SUBMITED,
    selectedAnswer: "",
    stateTime: "START",
  });

  const handleOptionClick = (answer: string) => {
    setStateQuestion({
      ...stateQuestion,
      selectedAnswer: answer,
    });
  };

  const handleButtonNext = () => {
    console.log("handleButtonNext");
    if (stateQuestion.stateTime === "START") {
      console.log("esta empezado");
      setStateQuestion({
        ...stateQuestion,
        state: AnswerState.NEXT,
        stateTime: "PAUSE",
      });
      setStep({
        ...step,
        end: step.current === step.total,
      });
    } else if (stateQuestion.stateTime === "PAUSE") {
      console.log("esta pausado");

      sumCorrect(
        stateQuestion.selectedAnswer === quiz.questions[step.current - 1].answer
      );
      setStep({
        ...step,
        current: step.current + 1,
      });
      setStateQuestion({
        state: AnswerState.SUBMITED,
        selectedAnswer: "",
        stateTime: "START",
      });
    }
  };

  return (
    <div className="flex flex-row justify-center gap-4 p-[2%]">
      <SectionQuestion
        step={step}
        quiz={quiz}
        stateQuestion={stateQuestion}
        setStateQuestion={setStateQuestion}
      />
      <div className="w-[128px]"></div>

      <SectionAnswer
        handleButtonNext={handleButtonNext}
        handleOptionClick={handleOptionClick}
        stateQuestion={stateQuestion}
        quiz={quiz}
        step={step}
      />
    </div>
  );
};
