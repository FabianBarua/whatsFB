import { chats } from "./chats"
import { message } from "./message"

import { integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const chatMessages = sqliteTable('chatMessages', {
    chatId:  integer('chatId').references(()=>chats.chatId),
    messageId: integer('messageId').references(()=>message.messageId),
});
