import { useState, useEffect, useRef } from "react";
import type { IStateQuestion } from "../utils/types";

export const Timer = ({
  time,
  stateQuestion,
}: {
  time: number;
  stateQuestion: IStateQuestion;
  setStateQuestion: (state: IStateQuestion) => void;
}) => {
  const [segundos, setSegundos] = useState<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (stateQuestion.stateTime === "START") {
       setSegundos(0);
      timerRef.current = setInterval(() => {
        setSegundos((s) => s + 1);
      }, 1000);
    } else if (stateQuestion.stateTime === "PAUSE" || time === segundos) {
      console.log("pausa");
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [stateQuestion.stateTime]);

  return (
    <div className="flex flex-col w-full gap-4 bg-gray-400 rounded-full p-0.5">
      <div className="flex-start flex h-1.5 w-full overflow-hidden rounded-full bg-blue-gray-50 font-sans text-xs font-medium">
        <div
          style={{ width: `${Math.round((segundos / time) * 100)}%` }}
          className={`flex items-center justify-center h-full overflow-hidden text-white break-all bg-gray-900 rounded-full`}
        ></div>
      </div>
    </div>
  );
};
