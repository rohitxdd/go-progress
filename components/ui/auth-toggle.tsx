import { auth } from "@/auth";
import SignIn from "../sign-in";
import { SignOut } from "../sign-out";
import { MdEdit } from "react-icons/md";
import { Button } from "./button";
import Link from "next/link";

export default async function AuthSwitch() {
  const session = await auth();
  if (!session?.user) {
    return <SignIn />;
  } else {
    if (session?.user?.email === process.env.ADMIN_MAIL) {
      return (
        <>
          <Link href="/add-new">
            <Button variant="outline">
              <MdEdit />
            </Button>
          </Link>
          <img src={session.user.image!} className="w-8 rounded-full" alt="X" />
          <SignOut />
        </>
      );
    }
    return (
      <>
        <img src={session.user.image!} className="w-8 rounded-full" alt="X" />
        <SignOut />
      </>
    );
  }
}
