"use client";

import { ResponsiveContainer, Line, XAxis, Tooltip, LineChart } from "recharts";

const CustomTooltip = ({ payload, label, active }) => {
  const dateLabel = new Date(label).toLocaleString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  if (active) {
    const analysis = payload[0].payload;
    return (
      <div className=" custom-tooltip bg-[#8884d8]/20 p-2 overflow-hidden shadow-md border border-black/10 rounded-lg backdrop-blur-sm relative">
        <p
          className="label text-sm mt-2 text-white/30"
          style={{ color: analysis.color }}
        >
          {dateLabel}
        </p>
        <p className="intro text-sm uppercase">
          {analysis.mood} {analysis.sentimentScore}
        </p>
        <div
          className="absolute  top-2 w-full h-[0.1px] rounded-full"
          style={{ background: analysis.color }}
        ></div>
      </div>
    );
  }

  return null;
};

const Chart = ({ data }) => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <LineChart width={300} height={100} data={data}>
        <Line
          type="monotone"
          dataKey="sentimentScore"
          stroke="#8884d8"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <XAxis dataKey="createdAt" stroke="#5550bd" />
        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
