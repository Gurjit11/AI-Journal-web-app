import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Link from "next/link";
import { AiOutlineHistory } from "react-icons/ai";
import { BsJournalText } from "react-icons/bs";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid md:grid-cols-10 grid-cols-8 h-screen w-screen bg-cover bg-white">
      <div className="bg-[#143642] flex flex-col  items-center col-span-1 top-0 relative">
        <div className="mt-5 flex justify-center items-center ">
          <span className="md:block hidden md:mr-2 text-xl">Profile</span>
          <UserButton />
        </div>
        <div className="bg-white/60 w-full my-3 h-[0.1px]"></div>
        <p className="text-xl mt-2 hover:bg-yellow-500">
          <Link
            href="/journal"
            className="flex justify-center items-center w-full p-2 sm:px-5  rounded-xl"
          >
            <span className="hidden md:block">Journal</span>
            <span className="pl-2">
              <BsJournalText />
            </span>
          </Link>
        </p>
        <p className="text-xl mt-2 hover:bg-yellow-500">
          <Link
            href="/history"
            className="flex justify-center items-center w-full p-2 sm:px-5 rounded-xl"
          >
            <span className="hidden md:block ">History</span>
            <span className="pl-2">
              <AiOutlineHistory />
            </span>
          </Link>
        </p>
      </div>
      <div className="md:col-span-9 col-span-7">{children}</div>
    </div>
  );
};

export default DashboardLayout;
