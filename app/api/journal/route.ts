import { analyze } from "@/utils/ai";
import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const POST = async () => {
  const user = await getUserByClerkId();
  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: "Write about your day here!",
    },
  });

  const analysis = await analyze(entry.content);
  console.log(analysis);
  await prisma.analysis.create({
    data: {
      entryId: entry.id,
      userId: user.id,
      ...analysis,
    },
  });
  revalidatePath("/journal");

  return NextResponse.json({ data: entry });
};

// export const GET = async () => {
//     const user = await getUserByClerkId()
//     const entries = await prisma.journalEntry.findMany({
//         where: {
//             userId: user.id,
//         }
//     })

//     return NextResponse.json({data: entries})
// }

// export const DELETE = async (req) => {
//     const user = await getUserByClerkId()
//     const entry = await prisma.journalEntry.delete({
//         where: {
//             id: req.params.id,
//         }
//     })

//     return NextResponse.json({data: entry})
// }
