import DailyProgress from "@/components/ui/DailyProgress";
import { fetchAllProgress } from "./_actions";

export default async function Home() {
  const rows = await fetchAllProgress();
  if (rows.length === 0) {
    return (
      <div className="mt-10">
        <p className="text-xl">No Entries Available</p>
      </div>
    );
  }
  return <DailyProgress progressRows={rows} />;
}
