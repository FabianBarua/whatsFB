import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { userStatus } from "./userStatus";
export const users = sqliteTable('users', {
    userId: integer('userId').primaryKey({ autoIncrement: true }),
    avatar : text('avatar'),
    name: text('name'),
    userStatusId : integer('userStatusId').references(()=>userStatus.userStatusId),
});