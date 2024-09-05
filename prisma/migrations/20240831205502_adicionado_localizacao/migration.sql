/*
  Warnings:

  - Added the required column `ds_logradouro` to the `Vaga` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Vaga" (
    "cd_vaga" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nm_vaga" TEXT NOT NULL,
    "nm_imagemUrl" TEXT NOT NULL,
    "nm_empresa" TEXT NOT NULL,
    "eh_favorito" BOOLEAN NOT NULL DEFAULT false,
    "dt_postagem" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ds_vaga" TEXT NOT NULL,
    "ds_responsabilidades" TEXT NOT NULL,
    "ds_requisitos" TEXT NOT NULL,
    "ds_logradouro" TEXT NOT NULL
);
INSERT INTO "new_Vaga" ("cd_vaga", "ds_requisitos", "ds_responsabilidades", "ds_vaga", "dt_postagem", "eh_favorito", "nm_empresa", "nm_imagemUrl", "nm_vaga") SELECT "cd_vaga", "ds_requisitos", "ds_responsabilidades", "ds_vaga", "dt_postagem", "eh_favorito", "nm_empresa", "nm_imagemUrl", "nm_vaga" FROM "Vaga";
DROP TABLE "Vaga";
ALTER TABLE "new_Vaga" RENAME TO "Vaga";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
