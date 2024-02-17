/*
  Warnings:

  - You are about to drop the column `chat_message_user_id` on the `t_chat_message` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `t_chat_message` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "t_user_tag" (
    "user_tag_id" TEXT NOT NULL PRIMARY KEY,
    "user_tag_name" TEXT NOT NULL,
    "user_tag_created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_tag_updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "t_user_user_tag_map" (
    "user_id" TEXT NOT NULL,
    "user_tag_id" TEXT NOT NULL,
    "user_user_tag_map_created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("user_id", "user_tag_id"),
    CONSTRAINT "t_user_user_tag_map_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "t_user" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "t_user_user_tag_map_user_tag_id_fkey" FOREIGN KEY ("user_tag_id") REFERENCES "t_user_tag" ("user_tag_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Actor" (
    "actorId" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Film" (
    "filmId" TEXT NOT NULL PRIMARY KEY,
    "actorId" TEXT NOT NULL,
    CONSTRAINT "Film_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "Actor" ("actorId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_t_chat_message" (
    "chat_message_id" TEXT NOT NULL PRIMARY KEY,
    "chat_message" TEXT NOT NULL,
    "chat_message_created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chat_message_updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "chat_id" TEXT NOT NULL,
    CONSTRAINT "t_chat_message_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "t_user" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "t_chat_message_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "t_chat" ("chat_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_t_chat_message" ("chat_id", "chat_message", "chat_message_created_at", "chat_message_id", "chat_message_updated_at") SELECT "chat_id", "chat_message", "chat_message_created_at", "chat_message_id", "chat_message_updated_at" FROM "t_chat_message";
DROP TABLE "t_chat_message";
ALTER TABLE "new_t_chat_message" RENAME TO "t_chat_message";
CREATE TABLE "new_t_chat" (
    "chat_id" TEXT NOT NULL PRIMARY KEY,
    "chat_title" TEXT NOT NULL,
    "chat_created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chat_updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_t_chat" ("chat_id", "chat_title") SELECT "chat_id", "chat_title" FROM "t_chat";
DROP TABLE "t_chat";
ALTER TABLE "new_t_chat" RENAME TO "t_chat";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
