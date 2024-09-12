"use server";
import { auth } from "@/auth";
import { EntryFormSchema } from "@/lib/validationSchema";
import "@/envConfig";
import { db } from "@/data/db";
import { comments, progressEntries, users } from "@/data/schema";
import { count, eq } from "drizzle-orm";
import { ProgressType } from "@/lib/types";

export async function CreateProgress(state: unknown, formdata: FormData) {
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
      return { data: result.data };
    } else {
      console.error(result.error.format());
      return { error: "Something went wrong" };
    }
  } else {
    return { error: "not authorized or authenticated" };
  }
}

export async function progressCount(): Promise<number> {
  try {
    const rowCOunt = await db.select({ count: count() }).from(progressEntries);
    if (rowCOunt.length > 0) {
      return rowCOunt[0].count;
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.log(e);
    }
  }
  return 0;
}

export async function fetchAllProgress(): Promise<ProgressType[]> {
  try {
    const rows = await db.query.progressEntries.findMany();
    return rows as ProgressType[];
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    } else {
      console.log(e);
    }
  }
  return [];
}

export async function fetchProgressDetailsById(
  id: string
): Promise<ProgressType | null> {
  try {
    const row = await db.query.progressEntries.findFirst({
      where: eq(progressEntries.id, id),
    });
    if (row) {
      return row as ProgressType;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
}

export async function FetchComments(id: string) {
  try {
    return db
      .select({
        id: comments.id,
        comment: comments.comment,
        date: comments.created_at,
        name: users.name,
      })
      .from(comments)
      .innerJoin(users, eq(users.id, comments.user_id))
      .where(eq(comments.progress_entry_id, id));
  } catch (e) {
    console.error(e);
  }
}
