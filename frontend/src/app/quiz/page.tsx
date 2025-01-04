"use client";
import Button from "@/components/button";
import { useEffect, useState } from "react";
import { fetchQuiz, Quiz } from "@/app/quiz/";

const QuizPage = () => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [answerInput, setAnswerInput] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const fetchedQuiz = await fetchQuiz();
      setQuiz(fetchedQuiz);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="flex flex-col mt-8">
      <div>
        <p className="font-bold text-xl">Question</p>
        <div className="bg-white px-8 py-4 text-lg rounded-lg">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <p>Translate the following sentence:</p>
              <p>{quiz?.question}</p>
            </>
          )}
        </div>
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-bold text-xl">Answer</p>
        <input
          type="text"
          className="bg-white px-8 py-4 text-lg rounded-lg"
          placeholder="Type your answer here"
          disabled={loading || submitted}
          value={answerInput}
          onChange={(e) => setAnswerInput(e.target.value)}
        />
        <Button
          className="w-1/3 mt-4 mx-auto"
          onClick={() => {
            setSubmitted(true);
          }}
          disabled={loading || submitted}
        >
          Submit
        </Button>
      </div>
      {!submitted ? null : (
        <div className="mt-2 flex flex-col">
          <p className="font-bold text-xl">Model Answer</p>
          <div className="bg-white px-8 py-4 text-lg rounded-lg">
            <p>{quiz?.answer}</p>
          </div>
          <Button
            className="w-1/3 mt-4 mx-auto"
            onClick={() => {
              setSubmitted(false);
              setAnswerInput("");
              setTimeout(() => {
                window.location.reload();
              }, 100);
            }}
          >
            Continue
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
