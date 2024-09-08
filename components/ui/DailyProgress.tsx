import { fetchAllProgress } from "@/app/_actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

import Markdown from "react-markdown";

export default async function DailyProgress() {
  const rows = await fetchAllProgress();
  if (rows.length === 0) {
    return <div className="mt-10">
      <p className="text-xl">No Entries Available</p>
    </div>;
  }
  return (
    <>
      <div className="mt-10 container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rows.map((row) => (
          <Card
            className="cursor-pointer border-2 shadow-sm hover:shadow-2xl transition-all ease-in-out duration-200 dark:hover:scale-100"
            key={row.id}
          >
            <CardHeader>
              <CardTitle className="text-xl font-se">Day {row.day}</CardTitle>
              <CardDescription>{row.description}</CardDescription>
            </CardHeader>
            <CardContent className="prose max-h-64 truncate whitespace-pre-wrap">
              <Markdown className="dark:text-white dark:prose-a:text-blue-300 dark:prose-headings:text-blue-400">
                {row.description}
              </Markdown>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
