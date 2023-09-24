"use client";

import { createJournalEntry } from "@/utils/api";
import { useRouter } from "next/navigation";

const NewEntry = () => {
  const router = useRouter();
  const handleClick = async () => {
    const data = await createJournalEntry();
    router.push(`/journal/${data.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="w-fit px-10 cursor-pointer py-4 rounded-md my-2 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950"
    >
      Add New Entry +
    </div>
  );
};

export default NewEntry;
