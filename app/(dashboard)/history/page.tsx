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
    <div className="w-full h-full md:px-8 p-2 bg-[#1a4555] backdrop-blur-sm">
      <div className=" flex flex-col  md:flex-row justify-between items-center">
        <span className="text-5xl pt-4 font-semibold">History</span>
        <span></span>
        <span>
          <div className="text-xl py-3 pl-5">
            <span className="text-sm">Average Sentiment Score: </span>
            {average}
          </div>
        </span>
      </div>
      <div className=" h-[0.1px] bg-gray-400"></div>

      <div className="w-full mt-5 h-[500px] sm:p-8 bg-[#143642] rounded-xl p-2">
        <Chart data={analysis} />
      </div>
    </div>
  );
};

export default History;
