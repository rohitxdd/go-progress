import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

import Markdown from "react-markdown";

const codeString = `
\`\`\`go
package main

import "fmt"

func main() {
    fmt.Println("Hello, world!")
}
\`\`\`
`;

const htmlContent = `
This is a [Next.js](https://nextjs.org) project bootstrapped with [\`create-next-app\`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying \`app/page.tsx\`. The page auto-updates as you edit the file.

This project uses [\`next/font\`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

`;

const arr = new Array<number>(1).fill(0);

export default function DailyProgress() {
  return (
    <>
      <div className="mt-10 container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {arr.map((v, i) => (
          <Card
            className="cursor-pointer border-2 shadow-sm hover:shadow-2xl transition-all ease-in-out duration-200 dark:hover:scale-100"
            key={i}
          >
            <CardHeader>
              <CardTitle className="text-xl font-se">Day 1</CardTitle>
              <CardDescription>Go Basic</CardDescription>
            </CardHeader>
            <CardContent className="prose max-h-64 truncate whitespace-pre-wrap">
              <Markdown className="dark:text-white dark:prose-a:text-blue-300 dark:prose-headings:text-blue-400">
                {htmlContent}
              </Markdown>
              <Markdown>{codeString}</Markdown>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
