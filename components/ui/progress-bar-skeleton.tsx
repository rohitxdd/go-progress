import { Skeleton } from "./skeleton";

export default function ProgressBarSkeleton() {
  return (
    <div className="my-3">
      <Skeleton className="h-4 w-full"></Skeleton>
      <div className="float-end mx-1 mt-2">
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  );
}
