/*
  Warnings:

  - You are about to drop the `_CarToPerson` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CarToPerson" DROP CONSTRAINT "_CarToPerson_A_fkey";

-- DropForeignKey
ALTER TABLE "_CarToPerson" DROP CONSTRAINT "_CarToPerson_B_fkey";

-- DropTable
DROP TABLE "_CarToPerson";

-- CreateTable
CREATE TABLE "Person_Car" (
    "person_Id" INTEGER NOT NULL,
    "car_Id" INTEGER NOT NULL,

    CONSTRAINT "Person_Car_pkey" PRIMARY KEY ("person_Id","car_Id")
);

-- AddForeignKey
ALTER TABLE "Person_Car" ADD CONSTRAINT "Person_Car_person_Id_fkey" FOREIGN KEY ("person_Id") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person_Car" ADD CONSTRAINT "Person_Car_car_Id_fkey" FOREIGN KEY ("car_Id") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
