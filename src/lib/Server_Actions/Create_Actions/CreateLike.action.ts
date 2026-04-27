"use server";
import { prisma } from "@/lib/prisma";
import { GetUserSession } from "@/lib/Sessions/GetUserSession";
// ===============================
export const CreateLikeAction = async (
  opinionId: string,
): Promise<{ success: boolean }> => {
  try {
    const userSession = await GetUserSession();
    if (!userSession) return { success: false };
    if (!opinionId) return { success: false };

    const opinion = await prisma.opinion.findUnique({
      where: {
        id: opinionId,
      },
      select: { id: true },
    });
    if (!opinion) return { success: false };
    const isExistingLike = await prisma.like.findUnique({
      where: {
        userId_opinionId: {
          userId: userSession.id,
          opinionId,
        },
      },
    });
    if (isExistingLike) {
      await prisma.like.delete({
        where: {
          id: isExistingLike.id,
        },
      });
    } else {
      await prisma.like.create({
        data: {
          opinionId: opinion?.id,
          userId: userSession.id,
        },
      });
    }

    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};
