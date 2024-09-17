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
import { FormatDate } from "@/lib/utils";
import { Button } from "./button";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
export default function DailyProgress({
  progressRows,
}: {
  progressRows: ProgressType[];
}) {
  return (
    <>
      <div className="mt-10 container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {progressRows.map((row) => (
          <Card
            className="border-2 shadow-sm hover:shadow-2xl transition-all ease-in-out duration-200 dark:hover:scale-100"
            key={row.id}
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                Day {row.day}
              </CardTitle>
              <CardDescription>{row.description}</CardDescription>
            </CardHeader>
            <CardContent className="prose max-h-64 min-h-64 truncate whitespace-pre-wrap">
              <Markdown className="dark:text-white dark:prose-invert prose-headings:my-2 text-sm flex flex-col justify-start">
                {row.overview}
              </Markdown>
            </CardContent>
            <CardFooter className="flex justify-between">
              {FormatDate(row.created_at)}
              <Link href={`/progress/${row.id}`}>
                <Button variant="outline">
                  <FaArrowRight />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
