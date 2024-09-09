import { SkeletonCard } from "@/components/ui/card-skeleton";
import ProgressDetail from "@/components/ui/progress-detail";
import { Suspense } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Suspense fallback={<SkeletonCard />}>
        <ProgressDetail slug={params.slug} />
      </Suspense>
    </>
  );
}
