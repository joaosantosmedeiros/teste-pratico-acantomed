-- CreateTable
CREATE TABLE "Pacient" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Pacient_pkey" PRIMARY KEY ("id")
);
