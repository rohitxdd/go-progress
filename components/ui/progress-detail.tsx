import { CommentCount, fetchProgressDetailsById } from "@/app/_actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import Markdown from "react-markdown";
import { auth } from "@/auth";
import CommentSection from "../comments/comment-section";
import AuthSwitch from "./auth-toggle";
import Link from "next/link";

export default async function ProgressDetail({ slug }: { slug: string }) {
  const data = await fetchProgressDetailsById(slug);
  const commentCount = await CommentCount(slug)
  const session = await auth();
  if (!data) {
    return <div className="text-xl font-semibold">No data Found.</div>;
  }
  return (
    <>
      <div className="mt-10 flex justify-end gap-3 px-2 underline underline-offset-2 text-sm">
        <Link href="/">Home</Link>
        <Link href="#comment-section">{commentCount} Comments</Link>
      </div>
      <Card className="border-2 shadow-sm mt-1">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Day {data.day}
          </CardTitle>
          <CardDescription>{data.description}</CardDescription>
        </CardHeader>
        <CardContent className="prose whitespace-pre-wrap max-w-full">
          <Markdown className="dark:text-white dark:prose-a:text-blue-300 dark:prose-headings:text-white prose-headings:my-2 prose-code:dark:text-slate-300 dark:prose-strong:text-white">
            {data.content}
          </Markdown>
        </CardContent>
      </Card>
      <div id="comment-section">
        {session ? (
          <CommentSection id={slug} />
        ) : (
          <div className="py-3 px-1">
            <div className="font-semibold antialiased flex items-center gap-2">
              SignIn <AuthSwitch /> to see the comments
            </div>
          </div>
        )}
      </div>
    </>
  );
}
