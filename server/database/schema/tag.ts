import { relations } from "drizzle-orm"
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core"

import { tagsToPersonalProjects } from "./tagsToPersonalProjects"

export const tags = sqliteTable("tags", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
})

export type Tag = typeof tags.$inferSelect

export const tagsRelations = relations(tags, ({ many }) => ({
  personalProjects: many(tagsToPersonalProjects),
}))
