/*
  Warnings:

  - Added the required column `affiliateUrl` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Product` ADD COLUMN `affiliateUrl` TEXT NOT NULL,
    ADD COLUMN `price` TEXT NOT NULL;
