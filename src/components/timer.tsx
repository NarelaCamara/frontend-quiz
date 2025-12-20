import { useEffect, useState } from "react";
import type { IStateQuestion } from "../utils/types";

export const Timer = ({
  time,
  stateQuestion,
  setStateQuestion,
}: {
  time: number;
  stateQuestion: IStateQuestion;
  setStateQuestion: (state: IStateQuestion) => void;
}) => {
  const [timeCurrent, setTimeCurrent] = useState(0);

  const timer_ = setTimeout(function () {
    if (timeCurrent !== time) {
      // 1. Calculamos el porcentaje
      setTimeCurrent(timeCurrent + 1);
    }
    if (time === timeCurrent) {
      setStateQuestion({ ...stateQuestion, timerFinished: true });
    }
  }, 1000);

  useEffect(() => {
    if (stateQuestion.timerFinished) {
      setTimeCurrent(0);
      clearTimeout(timer_);
    }
  }, [stateQuestion]);

  const porcentaje = Math.round((timeCurrent / time) * 100);
  return (
    <div className="flex flex-col w-full gap-4 bg-gray-400 rounded-full p-0.5">
      <div className="flex-start flex h-1.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
        <div
          style={{ width: `${porcentaje}%` }}
          className={`flex items-center justify-center h-full overflow-hidden text-white break-all bg-gray-900 rounded-full`}
        ></div>
      </div>
    </div>
  );
};
