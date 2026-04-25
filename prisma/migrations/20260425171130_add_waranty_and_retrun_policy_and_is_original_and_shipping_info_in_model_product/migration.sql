-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "isOriginal" BOOLEAN,
ADD COLUMN     "returnPolicy" TEXT,
ADD COLUMN     "shippingInfo" TEXT,
ADD COLUMN     "warranty" TEXT;
