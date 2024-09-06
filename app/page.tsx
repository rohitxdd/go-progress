import DailyProgress from "@/components/ui/DailyProgress";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { TextEffect } from "@/components/ui/TextEffect";
import { Progress } from "@radix-ui/react-progress";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container md:px-4 px-2 py-1  mx-auto max-w-screen-lg">
      <nav className="flex h-12 justify-between items-center">
        <p className="text-xl font-semibold antialiased">
          <TextEffect per="char" preset="fade">
            100 Days of Code
          </TextEffect>
        </p>
        <ModeToggle />
      </nav>
      <div className="py-5 my-5 max-w-screen-lg mx-auto">
        <Progress value={50} />
        <div className="float-end mx-1">
          <p className="text-sm font-semibold antialiased px-1">
            10% Completed
          </p>
        </div>
        <DailyProgress />
      </div>
    </div>
  );
}
