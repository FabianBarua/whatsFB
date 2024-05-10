import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'

export const chatType = sqliteTable('chatType', {
  chatTypeId: integer('chatTypeId').primaryKey({ autoIncrement: true }),
  name: text('name').notNull()
})
