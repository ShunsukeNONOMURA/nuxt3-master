-- CreateTable
CREATE TABLE "t_user" (
    "user_id" TEXT NOT NULL PRIMARY KEY,
    "user_name" TEXT NOT NULL,
    "user_role_id" TEXT NOT NULL,
    "user_creation_datetime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_update_datetime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "t_user_user_role_id_fkey" FOREIGN KEY ("user_role_id") REFERENCES "m_user_role" ("user_role_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "m_user_role" (
    "user_role_id" TEXT NOT NULL PRIMARY KEY,
    "user_role_name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "t_user_user_role_id_key" ON "t_user"("user_role_id");
