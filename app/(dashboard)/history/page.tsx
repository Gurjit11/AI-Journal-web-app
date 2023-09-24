import Chart from "@/components/Chart";
import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getData = async () => {
  const user = await getUserByClerkId();
  const analysis = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const sum = analysis.reduce((a, b) => a + b.sentimentScore, 0);
  const average = Math.round(sum / analysis.length);
  return { analysis, average };
};

const History = async () => {
  const { analysis, average } = await getData();

  return (
    <div className="w-full h-full">
      <div className="text-xl py-3 pl-5">
        <span className="text-sm">Average Sentiment Score: </span>
        {average}
      </div>
      <div className="w-full h-[500px] sm:p-8 bg-slate-900 p-2">
        <Chart data={analysis} />
      </div>
    </div>
  );
};

export default History;
