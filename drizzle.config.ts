import "@/data/envConfig";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./data/schema.ts",
  dialect: "postgresql",
  out: './drizzle',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
