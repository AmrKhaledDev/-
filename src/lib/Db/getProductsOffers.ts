import { Cache } from "../Cache/Cache";
import { prisma } from "@/lib/prisma";
import { ProductDbType } from "../types";
// ===============================================
export const getProductsOffers = Cache(
  async (): Promise<ProductDbType[]> => {
    const data = await prisma.product.findMany({
      include: {
        productImages: true,
        category: true,
      },
      where: {
        productImages: {
          some: {},
        },
        isOnSale: true,
        discountPrice: {
          not: null,
        },
      },
    });
    return data;
  },
  ["products"],
  { revalidate: 3600, tags: ["products"] },
);
