import { chatType } from './chatType'

import { integer, text, sqliteTable } from 'drizzle-orm/sqlite-core'

export const chats = sqliteTable('chats', {
  chatId: integer('chatId').primaryKey({ autoIncrement: true }),
  chatTypeId: integer('typeId').references(() => chatType.chatTypeId),
  name: text('name')
})
