import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Link from "next/link";
import { AiOutlineHistory } from "react-icons/ai";
import { BsJournalText } from "react-icons/bs";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-10 h-screen w-screen ">
      <div className="bg-gradient-to-r from-slate-900 to-gray-950 flex flex-col  items-center col-span-1">
        <div className="mt-5 flex justify-center items-center">
          <span className="md:block hidden md:mr-2 text-xl">Profile</span>
          <UserButton
            appearance={{
              baseTheme: dark,
            }}
          />
        </div>
        <div className="bg-white/60 w-full my-3 h-[0.1px]"></div>
        <p className="text-xl mt-2">
          <Link
            href="/journal"
            className="flex justify-center items-center w-full p-2 hover:bg-gray-500/30 rounded-xl"
          >
            <span className="hidden md:block">Journal</span>
            <span className="pl-2">
              <BsJournalText />
            </span>
          </Link>
        </p>
        <p className="text-xl mt-2">
          <Link
            href="/history"
            className="flex justify-center items-center w-full p-2 hover:bg-gray-500/30 rounded-xl"
          >
            <span className="hidden md:block ">History</span>
            <span className="pl-2">
              <AiOutlineHistory />
            </span>
          </Link>
        </p>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default DashboardLayout;
