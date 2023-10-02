const EntryCard = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString();
  return (
    <div className="col-span-1  md:p-5 p-2 hover:translate-y-[-4px] hover:scale-[101%] hover:transition-all hover:ease-in-out hover:duration-500 transition-all duration-300 cursor-pointer rounded-md hover:shadow-[10px_15px_20px_0px_rgba(26,69,85,0.9)] my-2 bg-[#1a4555] backdrop-blur-sm  ">
      <div className="px-1 py-1 sm:px-2 text-sm">{date}</div>
      <div className="h-[0.1px] bg-slate-500"></div>
      <div className="px-1 py-2 whitespace-nowrap overflow-ellipsis">
        {entry?.analysis?.subject}
      </div>
      <div className="h-[0.1px] bg-slate-500"></div>
      <div className="px-1 py-2 sm:px-2 text-sm ">
        {entry?.analysis?.summary}
      </div>
      <div className="h-[0.1px] bg-slate-500"></div>
      <div className="px-1 py-1 sm:px-2 font-bold text-xl uppercase">
        {entry?.analysis?.mood}
      </div>
    </div>
  );
};

export default EntryCard;
