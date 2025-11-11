import "./App.css";
import { Card } from "./components/card";
import data from "./assets/data.json";
import { ButtonDarkLightMode } from "./components/button";

function App() {
  return (
    <div
      className={`bg-[url(./pattern-background-desktop-dark.svg)] min-h-screen bg-cover`}
    >
      <div className="flex flex-row-reverse ">
        <ButtonDarkLightMode />
      </div>
      <div className="p-6">
        <h2 className="text-[40px]">Welcome to the</h2>
        <h1 className="text-[40px] font-semibold">Frontend Quiz!</h1>
        <p className="text-[14px] text-[#626C7F] italic my-4">
          Pick a subject to get started.
        </p>

        <div className="flex flex-col gap-4">
          {data.quizzes.map((item: { title: string; icon: string }) => (
            <Card key={item.title} text={item.title} icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
