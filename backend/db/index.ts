import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'
import * as dotenv from 'dotenv'

dotenv.config({
  path: '.env'
})

const turso = createClient({
  url: process.env.DB_URL || '',
  authToken: process.env.DB_TOKEN || ''
})

export const db = drizzle(turso)
