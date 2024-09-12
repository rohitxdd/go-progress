import { fetchProgressDetailsById } from "@/app/_actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import Markdown from "react-markdown";
import { auth } from "@/auth";

export default async function ProgressDetail({ slug }: { slug: string }) {
  const data = await fetchProgressDetailsById(slug);
  const session = await auth();
  if (!data) {
    return <div className="text-xl font-semibold">No data Found.</div>;
  }
  return (
    <>
      <Card className="border-2 shadow-sm mt-10">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Day {data.day}
          </CardTitle>
          <CardDescription>{data.description}</CardDescription>
        </CardHeader>
        <CardContent className="prose whitespace-pre-wrap max-w-full">
          <Markdown className="dark:text-white dark:prose-a:text-blue-300 dark:prose-headings:text-white prose-headings:my-2 prose-code:dark:text-slate-300">
            {data.content}
          </Markdown>
        </CardContent>
      </Card>
      {session ? (
        <div>Show Comments</div>
      ) : (
        <div>Signin to see the comments</div>
      )}
    </>
  );
}
