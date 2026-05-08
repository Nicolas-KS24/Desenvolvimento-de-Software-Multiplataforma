-- DropForeignKey
ALTER TABLE "Person_Car" DROP CONSTRAINT "Person_Car_car_Id_fkey";

-- DropForeignKey
ALTER TABLE "Person_Car" DROP CONSTRAINT "Person_Car_person_Id_fkey";

-- AddForeignKey
ALTER TABLE "Person_Car" ADD CONSTRAINT "Person_Car_person_Id_fkey" FOREIGN KEY ("person_Id") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person_Car" ADD CONSTRAINT "Person_Car_car_Id_fkey" FOREIGN KEY ("car_Id") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;
