import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

const arr = new Array<number>(100).fill(0);

export default function DailyProgress() {
  return (
    <>
      <div className="mt-10 container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {arr.map((v, i) => (
          <Card
            className="cursor-pointer border-2 shadow-sm hover:shadow-2xl transition-all ease-in-out duration-200 dark:hover:scale-105"
            key={i}
          >
            <CardHeader>
              <CardTitle className="text-xl font-se">Day 1</CardTitle>
              <CardDescription>Go Basic</CardDescription>
            </CardHeader>
            <CardContent className="grid">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                architecto dolores necessitatibus ad, animi enim iste nulla odio
                velit adipisci similique dolore natus, harum aliquam eos
                accusantium neque
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
