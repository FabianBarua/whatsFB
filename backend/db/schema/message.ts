import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";
import { users } from "./user";
import { sql } from "drizzle-orm";

export const message = sqliteTable('message', {
    messageId: integer('messageId').primaryKey({ autoIncrement: true }),
    content: text('content'),
    userId : integer('userId').references(()=>users.userId),
    date: text("date").default(sql`(CURRENT_DATE)`),
});