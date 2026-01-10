import axios from "axios";
import type { IQuiz } from "../../utils/types";

export const useQuizServer = () => {
  const url_server = import.meta.env.VITE_APP_URL;

  const instance = axios.create({
    baseURL: url_server,
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
  });

  console.log("url_server", url_server);

  const getQuizSelected = async (selection: string): Promise<IQuiz> => {
    console.log("selection", selection);
    const quizzes = await instance
      .get(`quizzes/quiz/${selection}`)
      .then((result) => result.data)

      .catch(() => null);
    console.log("quizzes", quizzes, selection);
    return quizzes;
  };

  const getIconServer = (selection: string) => {
    console.log(
      "selectrion:",
      `${url_server}/assets/icon-${String(selection).toLowerCase().trim()}.svg`
    );
    return `${url_server}/assets/icon-${String(selection)
      .toLowerCase()
      .trim()}.svg`;
  };

  return { getQuizSelected, getIconServer };
};
