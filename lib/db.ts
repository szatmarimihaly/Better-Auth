import postgres from "postgres"
import { Kysely } from "kysely"
import { PostgresJSDialect } from "kysely-postgres-js"

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE FAILURE")
}

const sql = postgres(process.env.DATABASE_URL, {
    max: 10,
    idle_timeout: 20,
    connect_timeout: 10,
    ssl: "require"
})

// Create Kysely instance with PostgresJS dialect
export const db = new Kysely({
    dialect: new PostgresJSDialect({
        postgres: sql
    })
})