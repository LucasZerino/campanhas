/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Cargo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cargo_nome_key" ON "Cargo"("nome");
