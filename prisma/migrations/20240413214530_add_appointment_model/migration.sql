-- CreateTable
CREATE TABLE "Appointment" (
    "id" TEXT NOT NULL,
    "pacientId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Appointment_date_key" ON "Appointment"("date");

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_pacientId_fkey" FOREIGN KEY ("pacientId") REFERENCES "Pacient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
