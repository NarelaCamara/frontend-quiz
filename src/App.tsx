import { useNavigate } from "react-router";
import { Icon } from "./components/icon";
import { Nav } from "./components/nav";
import { useQuizServer } from "./lib/quiz-domain";
import { useEffect, useState } from "react";
import ErrorScreen from "./components/error";
import Spinner from "./components/spinner";

function App() {
  const navigate = useNavigate();

  const [quizzes, setQuizzes] = useState([]);
  console.log("quizzes", quizzes);
  const [state, setState] = useState("");

  const { getIconServer, getQuizzes } = useQuizServer();

  const handleQuizSelection = (quizTitle: string) => {
    const safeString = encodeURIComponent(quizTitle);
    // Navegar a /quiz pasando el string en el query param 'selection'
    navigate(`/quiz?selection=${safeString}`);
  };

  const getAllQuizzes = async () => {
    setState("loading");
    const result = await getQuizzes();
    console.log("result", result);
    if (result) {
      setState("ok");
      setQuizzes(result);
    } else {
      setState("error");
    }
  };

  useEffect(() => {
    getAllQuizzes();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <Nav />

      {state === "error" && <ErrorScreen />}
      {state === "loading" && <Spinner />}

      {state === "ok" && quizzes && (
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
              {quizzes.map((item: string) => (
                <div
                  onClick={() => handleQuizSelection(item)}
                  className={`w-[85vw] md:w-[60vw]  xl:min-w-[500px]  max-w-[700px] p-4 bg-white dark:bg-[#3B4D66] flex flex-row items-center rounded-xl shadow-md hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer   hover:bg-gray-100 hover:dark:bg-[#3B4D66]`}
                >
                  <Icon icon={getIconServer(item)} title={item} />
                  <p className="text-[#313E51] dark:text-[#FFFFFF] text-[14px] font-semibold">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
