import data from "../assets/data.json";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { ButtonDarkLightMode } from "./button";
import { Scored } from "./scored";
import { Question } from "./question";
import type { IQuiz, IStep } from "../utils/types";
import { Icon } from "./icon";

export const Quiz = () => {
  const [searchParams] = useSearchParams();
  const selection = searchParams.get("selection");

  const [quiz, setQuiz] = useState<IQuiz>();

  const handleFetchQuiz = (quizTitle: string) => {
    const quiz_selected = data.quizzes.find((q) => q.title === quizTitle);
    setQuiz(quiz_selected);
  };

  useEffect(() => {
    handleFetchQuiz(selection || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /******/

  const [step, setStep] = useState<IStep>({
    current: 1,
    total: 10,
    end: false,
  });

  const [score, setScore] = useState(0);

  const sumCorrect = (isCorrect: boolean) => {
    setScore(isCorrect ? score + 1 : score);
  };

  return (
    <>
      {!quiz && <div>...loading</div>}
      {quiz && (
        <>
          <div className="scale-90 sm:scale-100 max-w-7xl mx-auto pt-10 pb-10">
            <div className="flex flex-row p-2 items-center gap-4">
              <Icon icon={quiz?.icon} title={quiz?.title} />
              <p className="text-[#313E51] text-[14px] xl:text-[18px] font-semibold">
                {selection}
              </p>
              <div className="flex grow  justify-end">
                <ButtonDarkLightMode />
              </div>
            </div>

            {!step.end && (
              <Question
                step={step}
                quiz={quiz}
                setStep={setStep}
                sumCorrect={sumCorrect}
              />
            )}

            {step.end && (
              <Scored score={score} quiz={quiz} step={step} setStep={setStep} />
            )}
          </div>
        </>
      )}
    </>
  );
};
