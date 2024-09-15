"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CreateComment } from "@/app/_actions";

export default function AddComment({ id }: { id: string }) {
  const [showCommentBox, setShowCommentBox] = useState<boolean>(false);
  const { toast } = useToast();

  async function handleFormSubmission(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formdata = new FormData(form);
    const content = formdata.get("comment") as string | null;
    if (content === null) {
      toast({
        title: "Field Required",
        description: `Comment field is missing or empty.`,
        variant: "destructive",
      });
      return;
    } else if (content.length <= 6 || content.length > 300) {
      toast({
        title: "Validation Failed",
        description: `Comment must be greater than 6 chars and less than 300 chars`,
        variant: "destructive",
      });
      return;
    }
    const res = await CreateComment(content, id);
    if (!res) {
      toast({
        title: "Comment added",
      });
      setShowCommentBox(false);
      return;
    }
    toast({
      title: "Oops",
      description: res.error,
      variant: "destructive",
    });
    return;
  }

  return (
    <>
      {showCommentBox ? (
        <form className="max-w-full" onSubmit={handleFormSubmission}>
          <div className="grid items-center max-w-full gap-4">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="comment">Enter your Comment:</Label>
              <Textarea id="comment" name="comment"></Textarea>
            </div>
            <div className="flex flex-col space-y-2">
              <Button type="submit" variant="default">
                Submit
              </Button>
              <Button
                type="reset"
                onClick={() => setShowCommentBox(!showCommentBox)}
                variant="ghost"
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <div>
          <Button onClick={() => setShowCommentBox(!showCommentBox)}>
            Add Comment
          </Button>
        </div>
      )}
    </>
  );
}
