"use client";

import { askQuestion } from "@/utils/api";
import { useState } from "react";
import img from "./chat-gpt.png";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

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
          className="bg-black/10 border-b-2 border-blue-800 text-black font-semibold py-2 px-2 rounded outline-none "
          placeholder="Ask a question!"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          disabled={loading}
          className="bg-sky-900 sm:w-fit w-full text-white font-semibold py-2 px-4 rounded"
          type="submit"
        >
          {!loading ? (
            <p className="text-white">Ask</p>
          ) : (
            <img
              className="w-8"
              src="https://i.pinimg.com/originals/54/ea/25/54ea256fa2e7619e590706779988f51c.gif"
            />
          )}
        </button>
      </form>

      {response && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto sm:my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between sm:p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-black font-semibold flex">
                    <Image src={img} height={35} width={35} alt="ChatGPT:" />{" "}
                    Journal AI
                  </h3>
                  <button className="text-black text-xl" onClick={handleClear}>
                    <AiOutlineClose />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 bg-sky-900  flex-auto">
                  <div className="mt-4">
                    <p className="text-white/90 max-h-[300px] max-w-3xl   overflow-y-auto">
                      {response}
                    </p>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 border-2 border-red-500 rounded-md background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleClear}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
};

export default Question;
