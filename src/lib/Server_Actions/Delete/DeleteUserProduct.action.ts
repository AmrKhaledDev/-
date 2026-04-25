"use server";
import { prisma } from "@/lib/prisma";
// ====================================
export const DeleteUserProductAction = async (
  userProductId: string,
): Promise<{ success: boolean; message: string }> => {
  try {
    if (!userProductId) return { success: false, message: "المنتج غير موجود" };
    const userProduct = await prisma.userProduct.findUnique({
      where: {
        id: userProductId,
      },
      select: { id: true },
    });
    if (!userProduct) return { success: false, message: "المنتج غير موجود" };
    await prisma.userProduct.delete({
      where: {
        id: userProduct.id,
      },
    });
    return { success: true, message: "تم حذف المنتج من السلة" };
  } catch (error) {
    console.log(error);
    return { success: false, message: "حدث خطأ أثناء حذف المنتج من السلة" };
  }
};
