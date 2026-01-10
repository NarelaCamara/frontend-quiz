import data from "./assets/data.json";
import { useNavigate } from "react-router";
import { Icon } from "./components/icon";
import { Nav } from "./components/nav";
import { useQuizServer } from "./lib/quiz-domain";

function App() {
  const navigate = useNavigate();

  const { getIconServer } = useQuizServer();

  const handleQuizSelection = (quizTitle: string) => {
    const safeString = encodeURIComponent(quizTitle);
    // Navegar a /quiz pasando el string en el query param 'selection'
    navigate(`/quiz?selection=${safeString}`);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Nav />

      <div className="flex flex-col items-start gap-4 m-[2%] relative left-5 xl:grid xl:grid-cols-2 ">
        <div className="  ">
          <h2 className="text-[40px] md:text-[64px] dark:text-[#FFFFFF] font-light">
            Welcome to the
          </h2>
          <h1 className="text-[40px] md:text-[64px] dark:text-[#FFFFFF] font-medium  ">
            Frontend Quiz!
          </h1>

          <p className="sm:text-[14px] md:text-[20px] text-[#626C7F] dark:text-[#ABC1E1] italic my-4   ">
            Pick a subject to get started.
          </p>
        </div>

        <div className="">
          <div className="flex flex-col gap-4">
            {data.quizzes.map((item: { title: string; icon: string }) => (
              <div
                onClick={() => handleQuizSelection(item.title)}
                className={`w-[85vw] md:w-[60vw]  xl:min-w-[500px]  max-w-[700px] p-4 bg-white dark:bg-[#3B4D66] flex flex-row items-center rounded-xl shadow-md hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer   hover:bg-gray-100 hover:dark:bg-[#3B4D66]`}
              >
                <Icon icon={getIconServer(item.title)} title={item.title} />
                <p className="text-[#313E51] dark:text-[#FFFFFF] text-[14px] font-semibold">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
