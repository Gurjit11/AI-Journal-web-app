const EntryCard = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString();
  return (
    <div className="col-span-1  md:px-10 p-2 cursor-pointer rounded-md my-2 bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950">
      <div className="px-4 py-2 sm:px-6">{date}</div>
      <div className="h-[0.1px] bg-slate-500"></div>
      <div className="px-4 py-3 ">{entry?.analysis?.subject}</div>
      <div className="h-[0.1px] bg-slate-500"></div>
      <div className="px-4 py-2 sm:px-6">{entry?.analysis?.mood}</div>
    </div>
  );
};

export default EntryCard;
