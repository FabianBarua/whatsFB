import { integer, text, sqliteTable } from 'drizzle-orm/sqlite-core'

export const messageType = sqliteTable('messageType', {
  messageTypeId: integer('messageTypeId').primaryKey({ autoIncrement: true }),
  type: text('type'),
  description: text('description')
})
