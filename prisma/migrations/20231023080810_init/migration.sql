/*
  Warnings:

  - You are about to drop the column `doTime` on the `Todo` table. All the data in the column will be lost.
  - Added the required column `hour` to the `Todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minutes` to the `Todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seconds` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "doTime",
ADD COLUMN     "hour" INTEGER NOT NULL,
ADD COLUMN     "minutes" INTEGER NOT NULL,
ADD COLUMN     "seconds" INTEGER NOT NULL;
