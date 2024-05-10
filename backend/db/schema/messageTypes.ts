import { integer, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const messageTypes = sqliteTable('messageTypes', {
    messageTypeId: integer('messageTypeId').primaryKey({ autoIncrement: true }),
    type: text('type'),
    description: text('description'),
});