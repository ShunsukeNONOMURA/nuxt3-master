-- CreateTable
CREATE TABLE "t_chat_message" (
    "chat_message_id" TEXT NOT NULL PRIMARY KEY,
    "chat_message" TEXT NOT NULL,
    "chat_message_created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chat_message_modify_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chat_message_user_id" TEXT NOT NULL,
    CONSTRAINT "t_chat_message_chat_message_user_id_fkey" FOREIGN KEY ("chat_message_user_id") REFERENCES "t_user" ("user_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
