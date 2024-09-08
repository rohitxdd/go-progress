"use client";
import { CreateProgress } from "@/app/_actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useFormState } from "react-dom";

export default function InputForm() {
  const [state, formAction] = useFormState(CreateProgress, null);
  console.log(state);
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
            <Button type="submit" variant="default">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
