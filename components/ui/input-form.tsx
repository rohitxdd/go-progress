"use client";
import { CreateProgress } from "@/app/_actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function InputForm() {
  const [state, formAction] = useFormState(CreateProgress, null);
  const status = useFormStatus();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (state?.data) {
      toast({
        title: "Daily Progress Inserted",
        description: `Day ${state.data.day} record inserted`,
      });
      router.push("/");
    } else if (state?.error) {
      toast({
        description: `Something went wrong!!!`,
      });
    }
  }, [state, toast, router]);

  return (
    <div className="max-w-screen-sm mt-10 mx-auto">
      <form action={formAction}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="day">Enter Day: </Label>
            <Input
              id="day"
              name="day"
              type="number"
              placeholder="Which Day...?"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="desc">Description:</Label>
            <Textarea id="desc" name="desc"></Textarea>
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="overview">Overview:</Label>
            <Textarea id="overview" rows={10} name="overview"></Textarea>
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="content">Content:</Label>
            <Textarea id="content" rows={15} name="content"></Textarea>
          </div>
          <div className="flex flex-col space-y-2">
            <Button type="submit" variant="default" disabled={status.pending}>
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
