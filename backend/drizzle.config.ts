import { type Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config(
    {
        path: '../.env'
    }
)

export default {
    dialect: "sqlite",
    schema: "./db/schema",
    driver: "turso",
    dbCredentials: {
        url: process.env.DB_URL || '', 
        authToken:  process.env.DB_TOKEN || undefined 
    },
  } satisfies Config;

