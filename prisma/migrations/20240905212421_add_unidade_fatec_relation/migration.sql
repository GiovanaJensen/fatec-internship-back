-- CreateTable
CREATE TABLE "Dica" (
    "cd_dica" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nm_dica" TEXT NOT NULL,
    "nm_imagemUrl" TEXT NOT NULL,
    "nm_autor" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UnidadeFatec" (
    "cd_unidadeFatec" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nm_unidadeFatec" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_estudante" (
    "cd_estudante" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nm_estudante" TEXT NOT NULL,
    "nm_email" TEXT NOT NULL,
    "cd_ra" TEXT NOT NULL,
    "nm_curso" TEXT NOT NULL,
    "ds_preferencias" TEXT NOT NULL,
    "cd_senha" TEXT NOT NULL,
    "nm_imagemPerfil" TEXT NOT NULL DEFAULT '',
    "nm_nacionalidade" TEXT NOT NULL DEFAULT '',
    "ds_objetivo" TEXT NOT NULL DEFAULT '',
    "ds_nivelIngles" TEXT NOT NULL DEFAULT '',
    "ds_genero" TEXT NOT NULL DEFAULT '',
    "cd_unidadeFatec" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "estudante_cd_unidadeFatec_fkey" FOREIGN KEY ("cd_unidadeFatec") REFERENCES "UnidadeFatec" ("cd_unidadeFatec") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_estudante" ("cd_estudante", "cd_ra", "cd_senha", "ds_preferencias", "nm_curso", "nm_email", "nm_estudante") SELECT "cd_estudante", "cd_ra", "cd_senha", "ds_preferencias", "nm_curso", "nm_email", "nm_estudante" FROM "estudante";
DROP TABLE "estudante";
ALTER TABLE "new_estudante" RENAME TO "estudante";
CREATE UNIQUE INDEX "estudante_nm_email_key" ON "estudante"("nm_email");
CREATE UNIQUE INDEX "estudante_cd_ra_key" ON "estudante"("cd_ra");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
