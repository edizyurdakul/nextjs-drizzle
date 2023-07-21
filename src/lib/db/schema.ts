import { mysqlTable, serial, text, varchar } from "drizzle-orm/mysql-core";

export const item = mysqlTable("item", {
  id: serial("id").primaryKey(),
  name: text("item_name"),
});
