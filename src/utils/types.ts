export interface IQuiz {
  title: string;
  icon: string;
  questions: Array<IQuestion>;
}

export interface IQuestion {
  question: string;
  options: Array<string>;
  answer: string;
}

export interface IStep {
  current: number;
  total: number;
  end: boolean;
}

export interface IStateQuestion {
  state: string;
  selectedAnswer: string;
  stateTime: ITimer;
}

export type ITimer = "START" | "END" | "PAUSE";
