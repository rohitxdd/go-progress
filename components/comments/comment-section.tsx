import { FetchComments } from "@/app/_actions";

export default async function CommentSection({ id }: { id: string }) {
  const comments = FetchComments(id);
  return <>{JSON.stringify(comments)}</>;
}
