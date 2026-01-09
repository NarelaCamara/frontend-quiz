import data from "../assets/data.json";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Scored } from "./scored";
import { Question } from "./question";
import type { IQuiz, IStep } from "../utils/types";

import { Nav } from "./nav";

export const Quiz = () => {
  const [searchParams] = useSearchParams();
  const selection = searchParams.get("selection");

  const [quiz, setQuiz] = useState<IQuiz>();

  const [step, setStep] = useState<IStep>({
    current: 1,
    total: 10,
    end: false,
  });

  const [score, setScore] = useState(0);

  const handleFetchQuiz = (quizTitle: string) => {
    const quiz_selected = data.quizzes.find((q) => q.title === quizTitle);
    setQuiz(quiz_selected);
  };

  const sumCorrect = (isCorrect: boolean) => {
    setScore(isCorrect ? score + 1 : score);
  };

  useEffect(() => {
    handleFetchQuiz(selection || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!quiz && <div>...loading</div>}
      {quiz && (
        <div className="">
          <Nav title={quiz.title} icon={quiz.icon} />
          <div className="scale-90 sm:scale-100 max-w-7xl mx-auto">
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
        </div>
      )}
    </>
  );
};
