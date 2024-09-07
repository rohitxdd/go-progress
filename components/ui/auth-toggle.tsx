import { auth } from "@/auth";
import SignIn from "../sign-in";
import { SignOut } from "../sign-out";

export default async function AuthSwitch() {
  const session = await auth();
  console.log(session);
  if (!session?.user) {
    return <SignIn />;
  } else {
    return (
      <>
        <img src={session.user.image!} className="w-8 rounded-full" alt="X" />
        <SignOut />
      </>
    );
  }
}
