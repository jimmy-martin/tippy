/*
  Warnings:

  - Changed the type of `type` on the `Shift` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Shift" DROP COLUMN "type",
ADD COLUMN     "type" BOOLEAN NOT NULL;
