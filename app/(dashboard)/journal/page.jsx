import EntryCard from "@/components/EntryCard";
import NewEntry from "@/components/NewEntry";
import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import Link from "next/link";
import { analyze } from "@/utils/ai";
import Question from "@/components/Question";

const getEntries = async () => {
  const user = await getUserByClerkId();
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      analysis: true,
    },
  });
  return entries;
};

const JournalPage = async () => {
  const entries = await getEntries();
  // console.log("entries", entries);

  return (
    <div className="md:px-10 p-2 w-full h-full">
      <div className=" flex flex-col md:flex-row justify-between items-center">
        <span className="text-5xl pt-4 font-semibold">Journal</span>
        <span>
          <Question />
        </span>
        <span>
          <NewEntry />
        </span>
      </div>
      <div className=" h-[0.1px] bg-gray-400"></div>

      <div className="grid grid-cols-3 gap-4 pt-5">
        {entries.map((entry) => (
          <Link href={`/journal/${entry.id}`} key={entry.id}>
            <EntryCard entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JournalPage;
