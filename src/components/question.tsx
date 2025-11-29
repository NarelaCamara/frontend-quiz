import { Option } from "./option";

export const Question = ({
  step,
  setStep,
  quiz,
  handleSetScore,
  setEndQuiz,
  clicked,
}: {
  step: { current: number; total: number };
  setStep: React.Dispatch<
    React.SetStateAction<{ current: number; total: number }>
  >;
  quiz: {
    title: string;
    icon: string;
    questions: Array<{
      question: string;
      options: Array<string>;
      answer: string;
    }>;
  };
  handleSetScore: (isCorrect: boolean) => void;
  setEndQuiz: React.Dispatch<React.SetStateAction<boolean>>;

  clicked: boolean;
}) => {
  const alfabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

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
                text={e}
                letter={alfabet[index]}
                handleSetScore={handleSetScore}
                isCorrect={quiz?.questions[step.current - 1].answer === e}
              />
            );
          })}

        <button
          onClick={() => {
            setStep((prevStep) => ({
              ...prevStep,
              current: prevStep.current + 1,
            }));

            setEndQuiz(step.current === step.total);
          }}
          className={`p-4 mt-10 ${
            clicked ? "bg-[#A729F5]  cursor-pointer" : "bg-[#A729F5]/50"
          } text-white rounded-lg `}
        >
          {step.current === step.total ? "Submit Answer" : "Next Question"}
        </button>
      </div>
    </div>
  );
};
