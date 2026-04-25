"use server";
import { prisma } from "@/lib/prisma";
// ================================================
export const QtyProductAction = async (
  userProductId: string,
  type: "increment" | "decrement",
): Promise<{ success: boolean; message: string }> => {
  try {
    if (!userProductId) return { success: false, message: "المنتج غير موجود" };
    const userProduct = await prisma.userProduct.findUnique({
      where: { id: userProductId },
      include: { product: { select: { stock: true } } }, 
    });

    if (!userProduct) return { success: false, message: "المنتج غير موجود" };

    if (type === "increment") {
      if (userProduct.quantity >= userProduct.product.stock) {
        return { success: false, message: "عذراً، نفدت الكمية المتاحة في المخزن" };
      }
      await prisma.userProduct.update({
        where: { id: userProductId },
        data: { quantity: { increment: 1 } },
      });
    } else {
      if (userProduct.quantity <= 1) {
        return { success: false, message: "لا يمكنك تقليل الكمية عن 1" };
      }
      await prisma.userProduct.update({
        where: { id: userProductId },
        data: { quantity: { decrement: 1 } },
      });
    }
    return { success: true, message: "تم تحديث الكمية بنجاح" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "حدث خطأ غير متوقع" };
  }
};