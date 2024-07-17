/*
  Warnings:

  - Added the required column `CNPJ` to the `Empresa` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AcceptanceType" AS ENUM ('TermsOfUse', 'PrivacyPolicy', 'CommercialOffers');

-- AlterTable
ALTER TABLE "Empresa" ADD COLUMN     "CNPJ" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "number" INTEGER;

-- CreateTable
CREATE TABLE "Acceptance" (
    "id" TEXT NOT NULL,
    "type" "AcceptanceType" NOT NULL,
    "accepted" BOOLEAN NOT NULL,
    "acceptedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "acceptedIP" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Acceptance_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Acceptance" ADD CONSTRAINT "Acceptance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
