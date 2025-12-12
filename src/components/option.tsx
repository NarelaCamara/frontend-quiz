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
        if (stateQuestion.state === AnswerState.SUBMITED) {
          handleOptionClick(
            answer === stateQuestion.selectedAnswer ? "" : answer
          );
        }
      }}
      className={`mx-4 w-full ${
        stateQuestion.state === AnswerState.SUBMITED &&
        stateQuestion.selectedAnswer === answer
          ? "border-2 border-violet-500"
          : ""
      }
      ${
        stateQuestion.state === AnswerState.NEXT &&
        stateQuestion.selectedAnswer === answer
          ? correctAnswer === stateQuestion.selectedAnswer
            ? "border-2 border-green-500 text-white"
            : "border-2 border-red-500 text-white"
          : ""
      }
       p-4  bg-white flex flex-row items-center rounded-xl shadow-md  ${
         stateQuestion.state === AnswerState.SUBMITED
           ? "hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer   hover:bg-gray-100"
           : ""
       } `}
    >
      <p
        className={`   bg-[#F4F6FA] text-[#626C7F]        
          ${
            stateQuestion.state === AnswerState.SUBMITED &&
            stateQuestion.selectedAnswer === answer
              ? "bg-violet-500 text-white"
              : ""
          }
          ${
            stateQuestion.state === AnswerState.NEXT &&
            stateQuestion.selectedAnswer === answer
              ? correctAnswer === stateQuestion.selectedAnswer
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
              : ""
          }
         py-2 mr-2 px-4 text-[18px]  rounded-xl`}
      >
        {letter}
      </p>

      <div className={`text-[#313E51] text-[28px]] font-semibold`}>
        {" "}
        {answer}
      </div>

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
