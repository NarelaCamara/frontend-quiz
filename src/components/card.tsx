export const Card = ({ text, icon }: { text: string; icon: string }) => {
  console.log(icon);
  return (
    <div className="p-4 bg-white flex flex-row items-center rounded-lg shadow-md">
      <img src={icon} alt="icon" className="mx-4" />
      <p className="text-[#313E51]">{text}</p>
    </div>
  );
};
