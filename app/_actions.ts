"use server";
import { auth } from "@/auth";
import { EntryFormSchema } from "@/lib/validationSchema";
import "@/envConfig";
import { db } from "@/data/db";
import { progressEntries } from "@/data/schema";

export async function CreateProgress(state: any, formdata: FormData) {
  const session = await auth();
  if (session?.user?.email === process.env.ADMIN_MAIL) {
    const result = EntryFormSchema.safeParse({
      day: parseInt(formdata.get("day") as string, 10),
      desc: formdata.get("desc"),
      overview: formdata.get("overview"),
      content: formdata.get("content"),
    });

    if (result.success) {
      await db.insert(progressEntries).values({
        day: result.data.day,
        description: result.data.desc,
        overview: result.data.overview,
        content: result.data.content,
      });
      console.log("done");
      return { data: result.data };
    } else {
      return { error: result.error.format() };
    }
  } else {
    return { error: "not authorized or authenticated" };
  }
}


