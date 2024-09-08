import { fetchProgressDetailsById } from "@/app/_actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import Markdown from "react-markdown";

export default async function ProgressDetail({ slug }: { slug: string }) {
  const data = await fetchProgressDetailsById(slug);
  if (!data) {
    return <div className="text-xl font-semibold">No data Found.</div>;
  }
  return (
    <Card className="border-2 shadow-sm mt-10">
      <CardHeader>
        <CardTitle className="text-xl font-se">Day {data.day}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      <CardContent className="prose whitespace-pre-wrap">
        <Markdown className="dark:text-white dark:prose-a:text-blue-300 dark:prose-headings:text-blue-400 prose-headings:my-2 text-sm">
          {data.content}
        </Markdown>
      </CardContent>
    </Card>
  );
}
