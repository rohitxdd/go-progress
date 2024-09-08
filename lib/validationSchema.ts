import { z } from "zod";

export const EntryFormSchema = z.object({
  day: z.number().min(1, "Day must be a positive number"),
  desc: z.string().min(1, "Description is required"),
  overview: z.string().min(1, "Overview is required"),
  content: z.string().min(1, "Content is required"),
});
