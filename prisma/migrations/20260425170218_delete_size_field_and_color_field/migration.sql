/*
  Warnings:

  - You are about to drop the column `color` on the `UserProduct` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `UserProduct` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserProduct" DROP COLUMN "color",
DROP COLUMN "size";
