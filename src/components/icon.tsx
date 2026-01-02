import { colorIcon } from "../utils/utils";

export const Icon = ({ icon, title }: { icon: string; title: string }) => {
  const bg =
    colorIcon[title.toLocaleLowerCase() as keyof typeof colorIcon] ||
    "bg-gray-200";
  return (
    <img
      src={icon}
      alt="icon"
      className={`w-10 h-10 p-2 mr-2 ${bg} rounded-xl `}
    />
  );
};
