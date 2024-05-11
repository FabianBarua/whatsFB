import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  userId: integer('userId').primaryKey({ autoIncrement: true }),
  avatar: text('avatar'),
  name: text('name'),
  email: text('email'),
  password: text('password')
})
