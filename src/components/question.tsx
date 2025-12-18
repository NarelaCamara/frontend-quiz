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
  const [timeFinished, setTimeFinished] = useState(false);

  const [stateQuestion, setStateQuestion] = useState({
    state: AnswerState.SUBMITED,
    selectedAnswer: "",
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
      !timeFinished &&
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
      });
    }
  };

  useEffect(() => {
    if (timeFinished) {
      setStateQuestion({
        ...stateQuestion,
        state: AnswerState.NEXT,
      });
    }
  }, [timeFinished]);

  return (
    <div className="flex flex-row justify-center gap-4 p-[2%]">
      <SectionQuestion
        step={step}
        quiz={quiz}
        setTimeFinished={setTimeFinished}
      />
      <div className="w-[128px]"></div>

      <SectionAnswer
        handleButtonNext={handleButtonNext}
        stateQuestion={stateQuestion}
        handleOptionClick={handleOptionClick}
        timeFinished={timeFinished}
        quiz={quiz}
        step={step}
      />
    </div>
  );
};
