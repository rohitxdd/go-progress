import { progressCount } from "@/app/_actions";
import { Progress } from "./progress";

export default async function ProgressBar() {
  const count = await progressCount();
  return (
    <>
      <div className="my-3">
        <Progress value={count} />
        <div className="float-end mx-1">
          <p className="text-sm font-semibold antialiased px-1">
            {count}% Completed
          </p>
        </div>
      </div>
    </>
  );
}
