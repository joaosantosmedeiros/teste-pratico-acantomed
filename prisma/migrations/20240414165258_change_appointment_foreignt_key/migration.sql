/*
  Warnings:

  - You are about to drop the column `pacientId` on the `Appointment` table. All the data in the column will be lost.
  - Added the required column `pacientCpf` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Appointment" DROP CONSTRAINT "Appointment_pacientId_fkey";

-- AlterTable
ALTER TABLE "Appointment" DROP COLUMN "pacientId",
ADD COLUMN     "pacientCpf" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_pacientCpf_fkey" FOREIGN KEY ("pacientCpf") REFERENCES "Pacient"("cpf") ON DELETE RESTRICT ON UPDATE CASCADE;
