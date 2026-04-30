import { Cache } from "../Cache/Cache";
import { CategoriesOffers } from "../types";
import { prisma } from "@/lib/prisma";
// ===============================================

export const getCategoriesOffers = Cache(
  async (): Promise<CategoriesOffers[]> => {
    const data = await prisma.category.findMany({
      where: {
        products: {
          some: {
            isOnSale: true,
            discountPrice: {
              not: null,
            },
          },
        },
      },
      include: {
        products: {
          include: {
            productImages: true,
          },
        },
      },
    });
    return data;
  },
  ["getCategoriesOffers"],
  { revalidate: 3600, tags: ["getCategoriesOffers"] },
);
