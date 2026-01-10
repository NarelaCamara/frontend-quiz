import iconError from "../assets/images/icon-error.svg";
import iconSuccess from "../assets/images/icon-correct.svg";
import type { IStateQuestion } from "../utils/types";
import { AnswerState } from "../utils/utils";

export const Option = ({
  letter,
  answer,
  correctAnswer,
  stateQuestion,
  handleOptionClick,
}: {
  letter: string;
  answer: string;
  correctAnswer: string;
  stateQuestion: IStateQuestion;
  handleOptionClick: (answer: string) => void;
}) => {
  const IsCorrectAnswer = () => {
    return (
      answer === stateQuestion.selectedAnswer &&
      correctAnswer === stateQuestion.selectedAnswer
    );
  };

  const stateSubmitedSelectedAnswer = () => {
    return (
      stateQuestion.state === AnswerState.SUBMITED &&
      stateQuestion.selectedAnswer === answer
    );
  };

  const stateNextSelectedAnswerIsCorrect = () => {
    return (
      stateQuestion.selectedAnswer === answer &&
      correctAnswer === stateQuestion.selectedAnswer
    );
  };
  return (
    <div
      onClick={() => {
        if (stateQuestion.state === AnswerState.SUBMITED) {
          handleOptionClick(
            answer === stateQuestion.selectedAnswer ? "" : answer
          );
        }
      }}
      className={`mx-4 w-full xl:min-w-[500px]  max-w-[700px] ${
        stateSubmitedSelectedAnswer()
          ? "border-2 border-violet-500 bg-violet-500 text-white"
          : ""
      }
      ${
        stateQuestion.state === AnswerState.NEXT &&
        stateQuestion.selectedAnswer === answer
          ? IsCorrectAnswer()
            ? "border-2 border-green-500 text-white"
            : "border-2 border-red-500 text-white"
          : ""
      }
       p-4  bg-white dark:bg-[#3B4D66] flex flex-row items-center rounded-xl shadow-md  ${
         stateQuestion.state === AnswerState.SUBMITED
           ? "hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer   hover:bg-gray-100 hover:dark:bg-[#3B4D66]"
           : ""
       } `}
    >
      <p
        className={` dark:bg-[#3b4d66ad]  bg-[#F4F6FA] text-[#626C7F]       
          ${
            stateQuestion.state === AnswerState.SUBMITED
              ? ""
              : stateNextSelectedAnswerIsCorrect()
              ? correctAnswer === answer
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
              : ""
          }
         py-2 mr-2 px-4 text-[18px]  rounded-xl`}
      >
        {letter}
      </p>

      <div
        className={`text-[#313E51] dark:text-[#FFFFFF] text-[28px]] font-semibold`}
      >
        {" "}
        {answer}
      </div>

      {stateQuestion.state === AnswerState.NEXT &&
        (correctAnswer === answer ||
          answer === stateQuestion.selectedAnswer) && (
          <img
            src={correctAnswer === answer ? iconSuccess : iconError}
            alt="icon"
            className={`ml-auto w-6 h-6`}
          />
        )}
    </div>
  );
};
