import { prisma } from "@/utils/db";
import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
const createUser = async () => {
  const user = await currentUser();
  const match = await prisma.user.findUnique({
    where: {
      clerkId: user?.id as string,
    },
  });

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user?.id as string,
        email: user?.emailAddresses[0].emailAddress, // Replace with a valid email address
      },
    });
  }

  redirect("/journal");
};

const NewUser = async () => {
  await createUser();
  return <div>Setting Up...</div>;
};

export default NewUser;
