/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Pacient` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Pacient_email_key" ON "Pacient"("email");
