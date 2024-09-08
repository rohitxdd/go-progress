"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import Markdown from "react-markdown";
import { ProgressType } from "@/lib/types";
import { useRouter } from "next/navigation";
export default function DailyProgress({
  progressRows,
}: {
  progressRows: ProgressType[];
}) {
  const router = useRouter();
  return (
    <>
      <div className="mt-10 container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {progressRows.map((row) => (
          <Card
            className="cursor-pointer border-2 shadow-sm hover:shadow-2xl transition-all ease-in-out duration-200 dark:hover:scale-100"
            key={row.id}
            onClick={() => router.push(`/progress/${row.id}`)}
          >
            <CardHeader>
              <CardTitle className="text-xl font-se">Day {row.day}</CardTitle>
              <CardDescription>{row.description}</CardDescription>
            </CardHeader>
            <CardContent className="prose max-h-64 truncate whitespace-pre-wrap">
              <Markdown className="dark:text-white dark:prose-a:text-blue-300 dark:prose-headings:text-blue-400 prose-headings:my-2 text-sm">
                {row.overview}
              </Markdown>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
