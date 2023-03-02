/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `item` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `person` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "item_userId_key" ON "item"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "person_userId_key" ON "person"("userId");
