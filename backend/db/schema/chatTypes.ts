import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const chatTypes = sqliteTable('chatTypes', {
    chatTypeId: integer('chatTypeId').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
});