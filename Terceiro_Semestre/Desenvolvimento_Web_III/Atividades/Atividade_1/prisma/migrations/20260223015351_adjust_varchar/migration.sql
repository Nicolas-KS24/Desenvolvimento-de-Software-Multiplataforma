/*
  Warnings:

  - You are about to alter the column `model` on the `Car` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(20)`.
  - You are about to alter the column `name` on the `Person` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.
  - Added the required column `number` to the `Number_Phone` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ALTER COLUMN "model" SET DATA TYPE VARCHAR(20);

-- AlterTable
ALTER TABLE "Number_Phone" ADD COLUMN     "number" VARCHAR(11) NOT NULL;

-- AlterTable
ALTER TABLE "Person" ALTER COLUMN "name" SET DATA TYPE VARCHAR(30);
