import { integer, text, sqliteTable } from 'drizzle-orm/sqlite-core'

export const userStatus = sqliteTable('userStatus', {
  userStatusId: integer('userStatusId').primaryKey({ autoIncrement: true }),
  name: text('name')
})
