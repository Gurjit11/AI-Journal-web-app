import { analyze } from "@/utils/ai";
import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const PATCH = async (request: Request, { params }) => {
  const { id } = params;
  const user = await getUserByClerkId();
  const { content } = await request.json();

  const updatedEntry = await prisma.journalEntry.update({
    where: {
      userId_id: { userId: user.id, id: parseInt(id) },
    },
    data: {
      content,
    },
  });
  const analysis = await analyze(updatedEntry.content);
  const updated = await prisma.analysis.upsert({
    where: {
      entryId: parseInt(id),
    },
    create: {
      entryId: parseInt(id),
      userId: user.id,
      ...analysis,
    },
    update: analysis,
  });

  return NextResponse.json({ data: { ...updatedEntry, analysis: updated } });
};
