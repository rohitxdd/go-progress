import { FetchComments } from "@/app/_actions";
import AddComment from "./add-comments";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FaUser } from "react-icons/fa";

export default async function CommentSection({ id }: { id: string }) {
  const comments = await FetchComments(id);
  return (
    <Card className="mt-5">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Comments:</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          {comments && comments.length > 0 ? (
            <div>
              {comments.map((comment) => (
                <div key={comment.id}>
                  <div className="flex items-center gap-2 py-2">
                    <FaUser className="text-2xl" />
                    <div>
                      <p className="font-semibold text-sm antialiased">
                        {comment.name}
                      </p>
                      <p className="font-thin text-xs antialiased">
                        {comment.date.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="font-mono ml-8 prose max-w-full">
                    <pre>
                      <code>{comment.comment}</code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No Comments {`:(`}</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="block">
        <AddComment id={id} />
      </CardFooter>
    </Card>
  );
}
