import { useState } from "react";

export const Timer = ({
  time,
  setTimeFinished,
}: {
  time: number;
  setTimeFinished: (bool: boolean) => void;
}) => {
  const [timeCurrent, setTimeCurrent] = useState(0);

  setTimeout(function () {
    if (timeCurrent !== time) {
      // 1. Calculamos el porcentaje
      setTimeCurrent(timeCurrent + 1);
    }
    if (time === timeCurrent) {
      setTimeFinished(true);
    }
  }, 1000);

  const porcentaje = Math.round((timeCurrent / time) * 100);
  return (
    <div className="flex flex-col w-full gap-4 bg-gray-400 rounded-full">
      <div className="flex-start flex h-2.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
        <div
          style={{ width: `${porcentaje}%` }}
          className={`flex items-center justify-center h-full overflow-hidden text-white break-all bg-gray-900 rounded-full`}
        ></div>
      </div>
    </div>
  );
};
