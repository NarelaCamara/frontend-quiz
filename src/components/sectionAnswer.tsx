import type { IQuiz, IStateQuestion, IStep } from "../utils/types";
import { Option } from "./option";

export const SectionAnswer = ({
  handleButtonNext,
  stateQuestion,
  handleOptionClick,
  quiz,
  step,
}: {
  handleButtonNext: () => void;
  stateQuestion: IStateQuestion;
  handleOptionClick: (answer: string) => void;
  quiz: IQuiz;
  step: IStep;
}) => {
  const alfabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  return (
    <div className="flex flex-col content-center gap-4">
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
        className={`p-4 mt-10 ${
          stateQuestion.selectedAnswer !== ""
            ? "bg-[#A729F5]  cursor-pointer"
            : "bg-[#A729F5]/50"
        } text-white rounded-lg `}
      >
        {stateQuestion.state}
      </button>
    </div>
  );
};
