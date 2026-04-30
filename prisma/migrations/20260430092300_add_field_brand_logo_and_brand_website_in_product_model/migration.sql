-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "brandLogo" TEXT,
ADD COLUMN     "brandWebsite" TEXT,
ADD COLUMN     "discountPrice" DOUBLE PRECISION,
ADD COLUMN     "isOnSale" BOOLEAN NOT NULL DEFAULT false;
