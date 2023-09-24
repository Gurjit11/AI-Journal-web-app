"use client";

import { updateJournalEntry } from "@/utils/api";
import { useState } from "react";
import { useAutosave } from "react-autosave";

const Editor = ({ entry }) => {
  const [value, setValue] = useState(entry?.content || "");
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState(entry?.analysis || {});

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true);
      const data = await updateJournalEntry(entry.id, _value);
      setAnalysis(data?.analysis);
      setIsLoading(false);
    },
  });
  return (
    <div className="w-full h-full p-8">
      <div className="w-max px-10 cursor-default py-4 rounded-md my-2 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950">
        {isLoading ? "Saving..." : "Continue Writing!"}
      </div>
      <div className=" h-[90%] grid grid-cols-4">
        <textarea
          className="p-3 h-full w-full col-span-3 bg-gradient-to-br from-black via-slate-950 to-blue-950  text-white/80  border-blue-950 border-2 outline-none rounded-md"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="col-span-1 pl-3 ">
          <div className="h-full w-full p-3 bg-gradient-to-br overflow-y-auto overflow-x-auto from-slate-900 via-black to-gray-950  text-white/80  border-blue-950 border-2 outline-none  rounded-md">
            <div
              style={{ backgroundColor: analysis?.color }}
              className=" w-full py-3 flex justify-center items-center text-2xl rounded-md"
            >
              Analysis
            </div>
            <div className="text-white/80 mt-3 text-sm">
              <div className="text-xs">Subject</div>
              <div className="text-xl font-bold">{analysis?.subject}</div>
            </div>
            <div className="text-white/80 mt-3 text-sm">
              <div className="text-xs">Summary</div>
              <div className="text-xl font-bold">{analysis?.summary}</div>
            </div>
            <div className="text-white/80 mt-3 text-sm">
              <div className="text-xs">Mood</div>
              <div className="text-xl font-bold">{analysis?.mood}</div>
            </div>
            <div className="text-white/80 mt-3 text-sm">
              <div className="text-xs">Negative</div>
              <div className="text-xl font-bold">
                {analysis?.negative?.toString()}
              </div>
            </div>
            <div className="text-white/80 mt-3 text-sm">
              <div className="text-xs">Word Count</div>
              <div className="text-2xl font-bold">
                {value.split(" ").length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
