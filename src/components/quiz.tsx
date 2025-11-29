import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import data from "../assets/data.json";
import { colorIcon } from "../utils/utils";
import { ButtonDarkLightMode } from "./button";
import { Option } from "./option";
import { Scored } from "./scored";

export const Quiz = () => {
  const alfabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const [quiz, setQuiz] = useState<{
    title: string;
    icon: string;
    questions: Array<{
      question: string;
      options: Array<string>;
      answer: string;
    }>;
  }>();

  const [step, setStep] = useState<{
    current: number;
    total: number;
  }>({
    current: 1,
    total: 10,
  });
  const [searchParams] = useSearchParams();
  const selection = searchParams.get("selection");
  const [clicked, setClicked] = useState(false);
  const [score, setScore] = useState(0);
  const [endQuiz, setEndQuiz] = useState(false);

  const handleFetchQuiz = (quizTitle: string) => {
    const quiz_selected = data.quizzes.find((q) => q.title === quizTitle);
    setQuiz(quiz_selected);
  };

  const handleSetScore = (isCorrect: boolean) => {
    setScore(isCorrect ? score + 1 : score);
    setClicked(true);
  };

  useEffect(() => {
    handleFetchQuiz(selection || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const bg =
    colorIcon[quiz?.title.toLocaleLowerCase() as keyof typeof colorIcon] ||
    "bg-gray-200";

  console.log(step.current, step.total, step.current === step.total);
  return (
    <div className="scale-90 sm:scale-100 max-w-7xl mx-auto pt-10 pb-10">
      <div className="flex flex-row-reverse p-6">
        <ButtonDarkLightMode />
      </div>
      <div className="flex flex-row justify-start items-center">
        <img
          src={quiz?.icon}
          alt="icon"
          className={`p-2 mr-2 xl:p-4 xl:mr-4 ${bg} rounded-xl`}
        />
        <p className="text-[#313E51] text-[14px] xl:text-[18px] font-semibold">
          {selection}
        </p>
      </div>

      {!endQuiz && (
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
      )}

      {endQuiz && (
        <Scored
          score={score}
          bg={bg}
          icon={quiz?.icon}
          title={quiz?.title}
          total={step.total}
        />
      )}
    </div>
  );
};
