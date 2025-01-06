"use client";
import Button from "@/components/button";
import { useEffect, useState } from "react";
import { fetchQuiz, Quiz } from "@/app/quiz/";

const DEFAULT_COUNTDOWN = 10;

const QuizPage = () => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [answerInput, setAnswerInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(DEFAULT_COUNTDOWN);

  useEffect(() => {
    (async () => {
      const fetchedQuiz = await fetchQuiz();
      setQuiz(fetchedQuiz);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (countdown > 0 && !submitted && !loading) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (countdown === 0) {
      setSubmitted(true);
    }
  }, [countdown, loading, submitted]);

  return (
    <div className="flex flex-col mt-8">
      <div className="text-2xl text-center">
        {countdown === 0 ? (
          <p>{"Time's up!"}</p>
        ) : (
          <>
            <p>Time remaining:</p>
            <span className="text-3xl font-bod">{countdown}</span>
            <p>seconds</p>
          </>
        )}
      </div>
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
              setCountdown(DEFAULT_COUNTDOWN);
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
