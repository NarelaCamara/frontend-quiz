import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import data from "../assets/data.json";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

export const Quiz = () => {
  const [quiz, setQuiz] = useState<Array<Question> | undefined>();

  const [searchParams] = useSearchParams();

  const selection = searchParams.get("selection");

  const handleFetchQuiz = (quizTitle: string) => {
    const selectedQuiz = data.quizzes.find(
      (q) => q.title === quizTitle
    )?.questions;
    setQuiz(selectedQuiz);
  };

  useEffect(() => {
    handleFetchQuiz(selection || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("Selected quiz from query param:", selection);
  return (
    <div>
      nare
      {quiz &&
        quiz.map((e: { question: string }) => (
          <div key={e.question} className="mt-6">
            You selected: {e.question}
          </div>
        ))}
    </div>
  );
};
