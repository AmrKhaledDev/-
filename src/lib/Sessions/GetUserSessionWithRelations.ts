"use server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
// ======================================
export const GetUserSessionWithRelations = async () => {
  try {
    const session = await auth();
    if (session && session.user) {
      const user = await prisma.user.findUnique({
        where: {
          id: session.user.id,
        },
        include: {
          userProducts: {
            include: {
              product: {
                include: {
                  productImages: true,
                },
              },
            },
            orderBy: {
              createdAt: "desc",
            },
          },
        },
      });
      return user || null;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
