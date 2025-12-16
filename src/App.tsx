import { Card } from "./components/card";
import data from "./assets/data.json";
import { ButtonDarkLightMode } from "./components/button";

import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();

  const handleQuizSelection = (quizTitle: string) => {
    const safeString = encodeURIComponent(quizTitle);

    // Navegar a /quiz pasando el string en el query param 'selection'
    navigate(`/quiz?selection=${safeString}`);
  };
  return (
    <div
      className={`bg-pattern-mobile-light md:bg-pattern-tablet-light xl:bg-pattern-desktop-light bg-cover bg-no-repeat bg-center
        dark:bg-pattern-mobile-dark md:dark:bg-pattern-tablet-dark xl:dark:bg-pattern-desktop-dark 
        `}
    >
      <div className="scale-90 sm:scale-100 min-w-[360px]  sm:p-0 md:p-12 lg:p-24 m-12">
        <ButtonDarkLightMode />

        <div className="flex flex-col md:flex-row justify-around">
          <div>
            <h2 className="text-[40px] md:text-[64px]">Welcome to the</h2>
            <h1 className="text-[40px] md:text-[64px] font-semibold">
              Frontend Quiz!
            </h1>
            <br className="mb-10 hidden xl:show" />
            <p className="sm:text-[14px] md:text-[20px] text-[#626C7F] italic my-4">
              Pick a subject to get started.
            </p>
            <br className="mb-10" />
          </div>
          <div className="flex flex-col gap-4 ">
            {data.quizzes.map((item: { title: string; icon: string }) => (
              <Card
                key={item.title}
                text={item.title}
                icon={item.icon}
                handleSelectQuiz={handleQuizSelection}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
