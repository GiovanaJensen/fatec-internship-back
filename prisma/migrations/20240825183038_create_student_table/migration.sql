-- CreateTable
CREATE TABLE "estudante" (
    "cd_estudante" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nm_estudante" TEXT NOT NULL,
    "nm_email" TEXT NOT NULL,
    "cd_ra" TEXT NOT NULL,
    "nm_curso" TEXT NOT NULL,
    "ds_preferencias" TEXT NOT NULL,
    "cd_senha" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "estudante_nm_email_key" ON "estudante"("nm_email");

-- CreateIndex
CREATE UNIQUE INDEX "estudante_cd_ra_key" ON "estudante"("cd_ra");
