/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Pacient` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Pacient_cpf_key" ON "Pacient"("cpf");
