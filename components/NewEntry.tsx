"use client";

import { createJournalEntry } from "@/utils/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsPlusSquareDotted } from "react-icons/bs";

const NewEntry = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleClick = async () => {
    setLoading(true);
    const data = await createJournalEntry();
    setLoading(false);
    router.push(`/journal/${data.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="w-fit px-10 cursor-pointer py-4 rounded-md my-2 bg-sky-900"
    >
      {loading ? (
        "Creating..."
      ) : (
        <span className="flex justify-center items-center">
          Add New Entry{" "}
          <span className="ml-2">
            <BsPlusSquareDotted size={20} />
          </span>
        </span>
      )}
    </div>
  );
};

export default NewEntry;
