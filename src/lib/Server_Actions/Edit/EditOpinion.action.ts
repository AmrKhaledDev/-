"use server";
import { prisma } from "@/lib/prisma";
import { log } from "console";
// ==================================
export const EditOpinionAction = async (
  opinionId: string,
  newOpinion: string,
): Promise<{ success: boolean; message: string }> => {
  try {
    if (!newOpinion.trim())
      return { success: false, message: "لا يمكنك ترك رأي فارغ" };
    if (!opinionId) return { success: false, message: "تعليقك غير موجود" };
    const opinion = await prisma.opinion.findUnique({
      where: {
        id: opinionId,
      },
      select: { id: true },
    });
    if (!opinion)
      return {
        success: false,
        message: "تعليقك غير موجود في خوادمنا ربما تم حذفه",
      };
    await prisma.opinion.update({
      where: {
        id: opinionId,
      },
      data: {
        opinion: newOpinion,
      },
    });
    return { success: true, message: "تم تعديل تعليقك" };
  } catch (error) {
    log(error);
    return { success: false, message: "حذف خطأ غير متوقع" };
  }
};
