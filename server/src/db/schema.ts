import { integer, pgTable, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const Urls = pgTable("urls", {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    originalUrl: text('long_url').notNull(),
    shortCode: text('short_code').notNull().unique(),
    clicks: integer('clicks').default(0).notNull(),
    createdAt: timestamp().defaultNow().notNull(),
});