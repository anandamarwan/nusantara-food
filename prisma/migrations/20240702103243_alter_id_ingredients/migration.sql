/*
  Warnings:

  - The primary key for the `Food` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `ingredients` column on the `Food` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Food" DROP CONSTRAINT "Food_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
DROP COLUMN "ingredients",
ADD COLUMN     "ingredients" TEXT[],
ADD CONSTRAINT "Food_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Food_id_seq";
