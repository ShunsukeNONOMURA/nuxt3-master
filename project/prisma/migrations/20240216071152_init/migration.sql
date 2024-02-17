/*
  Warnings:

  - You are about to drop the column `chat_message_modify_at` on the `t_chat_message` table. All the data in the column will be lost.
  - You are about to drop the column `user_creation_datetime` on the `t_user` table. All the data in the column will be lost.
  - You are about to drop the column `user_update_datetime` on the `t_user` table. All the data in the column will be lost.
  - Added the required column `chat_id` to the `t_chat_message` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "t_chat" (
    "chat_id" TEXT NOT NULL PRIMARY KEY,
    "chat_title" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_t_chat_message" (
    "chat_message_id" TEXT NOT NULL PRIMARY KEY,
    "chat_message" TEXT NOT NULL,
    "chat_message_created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chat_message_updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chat_message_user_id" TEXT NOT NULL,
    "chat_id" TEXT NOT NULL,
    CONSTRAINT "t_chat_message_chat_message_user_id_fkey" FOREIGN KEY ("chat_message_user_id") REFERENCES "t_user" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "t_chat_message_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "t_chat" ("chat_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_t_chat_message" ("chat_message", "chat_message_created_at", "chat_message_id", "chat_message_user_id") SELECT "chat_message", "chat_message_created_at", "chat_message_id", "chat_message_user_id" FROM "t_chat_message";
DROP TABLE "t_chat_message";
ALTER TABLE "new_t_chat_message" RENAME TO "t_chat_message";
CREATE TABLE "new_t_user" (
    "user_id" TEXT NOT NULL PRIMARY KEY,
    "user_name" TEXT NOT NULL,
    "user_role_id" TEXT NOT NULL,
    "user_created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "t_user_user_role_id_fkey" FOREIGN KEY ("user_role_id") REFERENCES "m_user_role" ("user_role_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_t_user" ("user_id", "user_name", "user_role_id") SELECT "user_id", "user_name", "user_role_id" FROM "t_user";
DROP TABLE "t_user";
ALTER TABLE "new_t_user" RENAME TO "t_user";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
