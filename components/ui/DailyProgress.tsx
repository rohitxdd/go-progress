"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import Markdown from "react-markdown";
import { ProgressType } from "@/lib/types";
import { useRouter } from "next/navigation";
import { FormatDate } from "@/lib/utils";
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
              <CardTitle className="text-xl font-semibold">
                Day {row.day}
              </CardTitle>
              <CardDescription>{row.description}</CardDescription>
            </CardHeader>
            <CardContent className="prose max-h-64 min-h-64 truncate whitespace-pre-wrap">
              <Markdown className="dark:text-white dark:prose-a:text-blue-300 prose-code:bg-gray-300 dark:prose-headings:text-white prose-headings:my-2 text-sm">
                {row.overview}
              </Markdown>
            </CardContent>
            <CardFooter className="float-end" suppressHydrationWarning>
              {FormatDate(row.created_at)}
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
