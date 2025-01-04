export type Quiz = {
  question: string;
  answer: string;
};

export const fetchQuiz = async (): Promise<Quiz> => {
  const response = await fetch(`http://localhost:8080/api/v1/quizzes`, {
    cache: "no-store",
  }); // TODO use useSWR
  const quiz: Quiz = await response.json();
  return quiz;
};
