-- CreateTable
CREATE TABLE "Vaga" (
    "cd_vaga" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nm_vaga" TEXT NOT NULL,
    "nm_imagemUrl" TEXT NOT NULL,
    "nm_empresa" TEXT NOT NULL,
    "eh_favorito" BOOLEAN NOT NULL DEFAULT false,
    "dt_postagem" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
