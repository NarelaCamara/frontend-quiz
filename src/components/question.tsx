import { useEffect, useState } from "react";
import type { IQuiz, IStep } from "../utils/types";
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
  
  const [stateQuestion, setStateQuestion] = useState({
    state: AnswerState.SUBMITED,
    selectedAnswer: "",
    timerFinished: false,
  });

  const handleOptionClick = (answer: string) => {
    setStateQuestion({
      ...stateQuestion,
      selectedAnswer: answer,
    });
  };

  const handleButtonNext = () => {
    if (
      stateQuestion.selectedAnswer !== "" &&
      !stateQuestion.timerFinished &&
      stateQuestion.state === AnswerState.SUBMITED
    ) {
      setStateQuestion({
        ...stateQuestion,
        state: AnswerState.NEXT,
      });

      setStep({
        ...step,
        end: step.current === step.total,
      });
    } else {
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
        timerFinished: false,
      });
    }
  };

  useEffect(() => {
    if (stateQuestion.timerFinished) {
      setStateQuestion({
        ...stateQuestion,
        state: AnswerState.NEXT,
      });
    }
  }, [stateQuestion]);

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
