import ProgressDetail from "@/components/ui/progress-detail";
import { Suspense } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <Suspense>
        <ProgressDetail slug={params.slug} />
      </Suspense>
    </>
  );
}
