/*
  Warnings:

  - Added the required column `nm_dicaUrl` to the `Dica` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Dica" (
    "cd_dica" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nm_dica" TEXT NOT NULL,
    "nm_imagemUrl" TEXT NOT NULL,
    "nm_autor" TEXT NOT NULL,
    "nm_dicaUrl" TEXT NOT NULL
);
INSERT INTO "new_Dica" ("cd_dica", "nm_autor", "nm_dica", "nm_imagemUrl") SELECT "cd_dica", "nm_autor", "nm_dica", "nm_imagemUrl" FROM "Dica";
DROP TABLE "Dica";
ALTER TABLE "new_Dica" RENAME TO "Dica";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
