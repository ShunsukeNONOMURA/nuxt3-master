-- CreateTable
CREATE TABLE "t_user" (
    "user_id" TEXT NOT NULL PRIMARY KEY,
    "user_name" TEXT NOT NULL,
    "user_role_id" TEXT NOT NULL,
    "user_creation_datetime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_update_datetime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
