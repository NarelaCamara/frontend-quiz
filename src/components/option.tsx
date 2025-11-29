import iconError from "../assets/images/icon-error.svg";
import iconSuccess from "../assets/images/icon-correct.svg";
import type { IStateQuestion } from "../utils/types";
import { AnswerState } from "../utils/utils";

export const Option = ({
  letter,
  answer,
  correctAnswer,
  handleOptionClick,
  stateQuestion,
}: {
  letter: string;
  answer: string;
  correctAnswer: string;
  stateQuestion: IStateQuestion;
  handleOptionClick: (answer: string) => void;
}) => {
  return (
    <div
      onClick={() => {
        handleOptionClick(
          answer === stateQuestion.selectedAnswer ? "" : answer
        );
      }}
      className={`${
        stateQuestion.state === AnswerState.SUBMITED &&
        stateQuestion.selectedAnswer === answer
          ? "border-2 border-violet-500"
          : ""
      }
      ${
        stateQuestion.state === AnswerState.NEXT &&
        stateQuestion.selectedAnswer === answer
          ? correctAnswer === stateQuestion.selectedAnswer
            ? "border-2 border-green-500"
            : "border-2 border-red-500"
          : ""
      }
       p-4  bg-white flex flex-row items-center rounded-xl shadow-md min-w-[564px] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer   hover:bg-gray-100`}
    >
      <p
        className={`          
          ${
            stateQuestion.state === AnswerState.SUBMITED &&
            stateQuestion.selectedAnswer === answer
              ? "bg-violet-500"
              : "bg-gray-500"
          }
          ${
            stateQuestion.state === AnswerState.NEXT
              ? correctAnswer === stateQuestion.selectedAnswer
                ? "bg-green-500"
                : "bg-red-500"
              : ""
          }
          ${
            stateQuestion.state === AnswerState.NEXT
              ? correctAnswer === answer
                ? "bg-green-500"
                : "bg-red-500"
              : ""
          } py-2 mr-2 px-4 text-[18px] text-white  rounded-xl`}
      >
        {letter}
      </p>

      {answer}

      {stateQuestion.state === AnswerState.NEXT &&
        (correctAnswer === answer ||
          stateQuestion.selectedAnswer === answer) && (
          <img
            src={correctAnswer === answer ? iconSuccess : iconError}
            alt="icon"
            className={`ml-auto w-6 h-6`}
          />
        )}
    </div>
  );
};
