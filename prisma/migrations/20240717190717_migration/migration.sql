/*
  Warnings:

  - You are about to drop the column `empresaId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[empresaPadraoId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_empresaId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "empresaId",
ADD COLUMN     "empresaPadraoId" TEXT;

-- CreateTable
CREATE TABLE "_Empresas" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Empresas_AB_unique" ON "_Empresas"("A", "B");

-- CreateIndex
CREATE INDEX "_Empresas_B_index" ON "_Empresas"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_empresaPadraoId_key" ON "User"("empresaPadraoId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_empresaPadraoId_fkey" FOREIGN KEY ("empresaPadraoId") REFERENCES "Empresa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Empresas" ADD CONSTRAINT "_Empresas_A_fkey" FOREIGN KEY ("A") REFERENCES "Empresa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Empresas" ADD CONSTRAINT "_Empresas_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
