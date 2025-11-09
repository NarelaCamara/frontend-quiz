export const Card = ({ text, icon }: { text: string; icon: string }) => {
  return (
    <div className="p-4 bg-white flex flex-row items-center rounded-xl shadow-md">
      <img src={icon} alt="icon" className="p-4 mr-4 bg-amber-100 rounded-xl" />
      <p className="text-[#313E51] text-[18px] font-semibold">{text}</p>
    </div>
  );
};
