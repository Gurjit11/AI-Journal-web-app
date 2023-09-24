import { UserButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-10 h-screen w-screen">
      <div className="bg-gradient-to-r from-slate-900 to-gray-950 flex flex-col  items-center col-span-1">
        <div className="mt-5 flex justify-center items-center">
          <span className="md:block hidden md:mr-3">Profile</span>
          <UserButton
            appearance={{
              baseTheme: dark,
            }}
          />
        </div>
        <p className="text-xl mt-5">
          <Link href="/journal">Journal</Link>
        </p>
        <p className="text-xl mt-5">
          <Link href="/history">History</Link>
        </p>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default DashboardLayout;
