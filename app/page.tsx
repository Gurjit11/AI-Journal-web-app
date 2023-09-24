import Link from "next/link";
import { auth } from "@clerk/nextjs";
export default async function Home() {
  const { userId } = await auth();

  let href = userId ? "/journal" : "/new-user";

  return (
    <main className="flex min-h-screen flex-col items-center md:p-0 p-10">
      {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Get started by editing&nbsp;
        <code className="font-mono font-bold">app/page.tsx</code>
      </p> */}
      <div className="z-10 max-w-2xl mt-[15%] w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="w-full flex font-semibold flex-col justify-center items-center h-[500px] bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <h1 className="text-5xl">AI Journal Companion</h1>
          <p className="text-xl mt-5 text-gray-300">
            Our AI Journal Companion is your all-in-one solution for managing
            your personal diaries and gaining deep insights from your daily
            entries
          </p>
          <Link href={href}>
            <button className="mt-5 text-xl border border-gray-400 p-3 rounded-md bg-gradient-to-r from-purple-600 to-blue-800 hover:scale-105 hover:transition-all hover:duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
