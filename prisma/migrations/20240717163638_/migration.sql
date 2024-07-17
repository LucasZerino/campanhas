/*
  Warnings:

  - A unique constraint covering the columns `[CNPJ]` on the table `Empresa` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "cargoId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_CNPJ_key" ON "Empresa"("CNPJ");
