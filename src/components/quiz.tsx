import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Scored } from "./scored";
import { Question } from "./question";
import type { IQuiz, IStep } from "../utils/types";

import { Nav } from "./nav";
import { useQuizServer } from "../lib/quiz-domain";
import Spinner from "./spinner";
import ErrorScreen from "./error";

export const Quiz = () => {
  const { getQuizSelected, getIconServer } = useQuizServer();
  const [searchParams] = useSearchParams();
  const selection = searchParams.get("selection");
  const [stateQuiz, setStateQuiz] = useState("");

  const [quiz, setQuiz] = useState<IQuiz>();

  const [step, setStep] = useState<IStep>({
    current: 1,
    total: 10,
    end: false,
  });

  const [score, setScore] = useState(0);

  const handleFetchQuiz = async (quizTitle: string) => {
    setStateQuiz("loading");
    const result = await getQuizSelected(quizTitle);
    if (result) {
      setQuiz(result);
      setStateQuiz("ok");
    } else {
      setStateQuiz("error");
    }
  };

  const sumCorrect = (isCorrect: boolean) => {
    setScore(isCorrect ? score + 1 : score);
  };

  useEffect(() => {
    handleFetchQuiz(selection || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="">
      <Nav
        title={quiz?.title || ""}
        icon={selection ? getIconServer(selection) : ""}
      />
      {stateQuiz === "error" && <ErrorScreen />}
      {stateQuiz === "loading" && <Spinner />}
      {stateQuiz === "ok" && quiz && (
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
            <Scored
              score={score}
              quiz={quiz}
              step={step}
              setStep={setStep}
              icon={selection ? getIconServer(selection) : ""}
            />
          )}
        </div>
      )}
    </div>
  );
};
