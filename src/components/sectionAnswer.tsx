import type { IQuiz, IStateQuestion, IStep } from "../utils/types";
import { AnswerState } from "../utils/utils";
import { Option } from "./option";

export const SectionAnswer = ({
  stateQuestion,
  quiz,
  step,
  handleButtonNext,
  handleOptionClick,
}: {
  quiz: IQuiz;
  step: IStep;
  stateQuestion: IStateQuestion;
  handleButtonNext: () => void;
  handleOptionClick: (answer: string) => void;
}) => {
  const alfabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  return (
    <div className="flex flex-col justify-center items-center  gap-4">
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
        onClick={handleButtonNext}
        className={`p-4 mt-10 w-full ${
          (stateQuestion.state === AnswerState.SUBMITED &&
            stateQuestion.selectedAnswer !== "") ||
          stateQuestion.state === AnswerState.NEXT
            ? "bg-[#A729F5]  cursor-pointer"
            : "bg-[#A729F5]/50"
        } text-white rounded-lg `}
      >
        {stateQuestion.state}
      </button>
    </div>
  );
};
