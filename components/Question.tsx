"use client";

import { askQuestion } from "@/utils/api";
import { useState } from "react";
import img from "./chat-gpt.png";
import Image from "next/image";

const Question = () => {
  const [question, setQuestion] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const answer = await askQuestion(
      question +
        `
    .  Ans like you are talking to a human show feelings answer in short.
    `
    );
    setResponse(answer);
    setQuestion("");
    setLoading(false);
  };

  const handleClear = () => {
    setResponse("");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="sm:p-0 p-3 gap-2">
        <input
          type="text"
          value={question}
          disabled={loading}
          className="bg-transparent border-b-2 border-blue-800 text-white font-semibold py-2 px-2 rounded outline-none "
          placeholder="Ask a question!"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          disabled={loading}
          className="bg-gradient-to-br from-slate-600 via-slate-900 to-blue-950 sm:w-fit w-full text-white font-semibold py-2 px-4 rounded"
          type="submit"
        >
          Ask
        </button>
      </form>
      {loading && <p className="text-white">AI is thinking...</p>}
      {response && (
        <div className="mt-4">
          <div className="flex pb-2">
            <Image src={img} height={25} width={25} alt="ChatGPT:" />{" "}
            <button
              onClick={handleClear}
              className="text-white ml-3 bg-red-600 px-1 rounded-sm font-semibold"
            >
              Clear
            </button>
          </div>
          <p className="text-white/80 max-h-[300px] max-w-3xl border-[0.1px] border-blue-600 overflow-y-auto">
            {response}
          </p>
        </div>
      )}
    </div>
  );
};

export default Question;
