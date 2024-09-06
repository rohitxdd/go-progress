import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

const arr = new Array<Number>(100).fill(0);

export default function DailyProgress() {
  return (
    <>
      <div className="mt-10 container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {arr.map((v, i) => (
          <Card className="cursor-pointer border-2 shadow-sm hover:shadow-2xl transition-all ease-in-out duration-200 dark:hover:scale-105" key={i}>
            <CardHeader>
              <CardTitle>Day 1</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className=" flex items-center space-x-4 rounded-md border p-4">
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Push Notifications
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Send notifications to device.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
