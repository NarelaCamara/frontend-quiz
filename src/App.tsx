import data from "./assets/data.json";
import { ButtonDarkLightMode } from "./components/button";

import { useNavigate } from "react-router";
import { Icon } from "./components/icon";

function App() {
  const navigate = useNavigate();

  const handleQuizSelection = (quizTitle: string) => {
    const safeString = encodeURIComponent(quizTitle);
    // Navegar a /quiz pasando el string en el query param 'selection'
    navigate(`/quiz?selection=${safeString}`);
  };

  return (
    <div>
      <ButtonDarkLightMode />
      <div className="flex flex-col xl:flex-row items-start xl:items-center xl:justify-center gap-4 m-[2%] xl:gap-12">
        <div className="relative -top-5 xl:-top-15">
          <h2 className="text-[40px] md:text-[64px] font-light">
            Welcome to the
          </h2>
          <h1 className="text-[40px] md:text-[64px] font-medium relative -top-5">
            Frontend Quiz!
          </h1>

          <p className="sm:text-[14px] md:text-[20px] text-[#626C7F] italic my-4 relative -top-10">
            Pick a subject to get started.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {data.quizzes.map((item: { title: string; icon: string }) => (
            <div
              onClick={() => handleQuizSelection(item.title)}
              className={`w-[85vw] md:w-[60vw]  xl:w-[50%] p-2 xl:p-4 bg-white flex flex-row items-center rounded-xl shadow-md hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer   hover:bg-gray-100`}
            >
              <Icon icon={item.icon} title={item.title} />
              <p className="text-[#313E51] text-[14px] xl:text-[18px] font-semibold">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
