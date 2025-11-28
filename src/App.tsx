import "./App.css";
import { Card } from "./components/card";
import data from "./assets/data.json";
import { ButtonDarkLightMode } from "./components/button";
import { useState } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

function App() {
  const [quiz, setQuiz] = useState<Array<Question> | undefined>();

  const handleQuizSelection = (quizTitle: string) => {
    const selectedQuiz = data.quizzes.find(
      (q) => q.title === quizTitle
    )?.questions;
    setQuiz(selectedQuiz);
  };
  return (
    <div
      className={` 
        min-h-[300px] min-w-[360px] md:min-w-auto md:min-h-auto
        bg-pattern-mobile-light md:bg-pattern-tablet-light xl:bg-pattern-desktop-light bg-cover bg-no-repeat bg-center
        dark:bg-pattern-mobile-dark md:dark:bg-pattern-tablet-dark xl:dark:bg-pattern-desktop-dark transition-all duration-500 ease-in-out
        `}
    >
      <div className="scale-90 sm:scale-100 max-w-7xl mx-auto pt-10 pb-10">
        <div className="flex flex-row-reverse p-6">
          <ButtonDarkLightMode />
        </div>
        <div className="p-6 flex flex-col xl:flex-row justify-around ">
          <div>
            <h2 className="text-[40px]">Welcome to the</h2>
            <h1 className="text-[40px] font-semibold">Frontend Quiz!</h1>
            <br className="mb-10 hidden xl:show " />
            <p className="text-[14px] text-[#626C7F] italic my-4">
              Pick a subject to get started.
            </p>
            <br className="mb-10" />
          </div>
          <div className="flex flex-col gap-4">
            {data.quizzes.map((item: { title: string; icon: string }) => (
              <Card
                key={item.title}
                text={item.title}
                icon={item.icon}
                handleSelectQuiz={handleQuizSelection}
              />
            ))}

            {quiz &&
              quiz.map((e: { question: string }) => (
                <div key={e.question} className="mt-6">
                  You selected: {e.question}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
