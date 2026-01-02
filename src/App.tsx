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
      <div className="flex flex-row justify-center gap-4 m-[2%]">
        <div className="relative -top-5 ">
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
            <div
              onClick={() => handleQuizSelection(item.title)}
              className={`mx-4 w-full min-w-[350px] max-w-[700px]  p-2 xl:p-4 bg-white flex flex-row items-center rounded-xl shadow-md hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer   hover:bg-gray-100`}
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
