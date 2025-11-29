import data from "../assets/data.json";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { colorIcon } from "../utils/utils";
import { ButtonDarkLightMode } from "./button";
import { Scored } from "./scored";
import { Question } from "./question";
import type { IQuiz, IStep } from "../utils/types";

export const Quiz = () => {
  const [searchParams] = useSearchParams();
  const selection = searchParams.get("selection");

  const [quiz, setQuiz] = useState<IQuiz>();

  const [step, setStep] = useState<IStep>({
    current: 1,
    total: 10,
  });

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
        <Question
          step={step}
          quiz={quiz}
          clicked={clicked}
          setStep={setStep}
          handleSetScore={handleSetScore}
          setEndQuiz={setEndQuiz}
        />
      )}

      {endQuiz && <Scored score={score} quiz={quiz} step={step} />}
    </div>
  );
};
