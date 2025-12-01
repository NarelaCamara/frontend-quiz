import { useState } from "react";
import { Option } from "./option";
import type { IQuiz, IStep } from "../utils/types";
import { AnswerState } from "../utils/utils";

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
  const alfabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

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

  return (
    <div>
      <div className=" text-[#626C7F] text-[20px] italic">
        Question {step.current} of {step.total}
      </div>

      <div className="text-[#313E51] text-4xl">
        <p>{quiz?.questions[step.current - 1].question}</p>
      </div>

      <div className="flex flex-col gap-4">
        {quiz &&
          quiz?.questions[step.current - 1].options.map((e, index) => {
            return (
              <Option
                key={e}
                answer={e}
                letter={alfabet[index]}
                stateQuestion={stateQuestion}
                correctAnswer={quiz.questions[step.current - 1].answer}
                handleOptionClick={handleOptionClick}
              />
            );
          })}

        <button
          onClick={() => {
            if (stateQuestion.state === AnswerState.SUBMITED) {
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
                stateQuestion.selectedAnswer ===
                  quiz.questions[step.current - 1].answer
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
          }}
          className={`p-4 mt-10 ${
            stateQuestion.selectedAnswer !== ""
              ? "bg-[#A729F5]  cursor-pointer"
              : "bg-[#A729F5]/50"
          } text-white rounded-lg `}
        >
          {stateQuestion.state}
        </button>
      </div>
    </div>
  );
};
