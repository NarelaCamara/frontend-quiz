import { Icon } from "./icon";

export const Card = ({
  text,
  icon,
  handleSelectQuiz,
}: {
  text: string;
  icon: string;
  handleSelectQuiz: (quizTitle: string) => void;
}) => {
  return (
    <div
      onClick={() => handleSelectQuiz(text)}
      className={`p-2 xl:p-4 bg-white flex flex-row items-center rounded-xl shadow-md min-w-[564px] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer   hover:bg-gray-100`}
    >
      <Icon icon={icon} title={text} />
      <p className="text-[#313E51] text-[14px] xl:text-[18px] font-semibold">
        {text}
      </p>
    </div>
  );
};
