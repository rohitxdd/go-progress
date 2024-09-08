import { signOut } from "@/auth";
import { Button } from "./ui/button";
import { CiLogout } from "react-icons/ci";


export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit" variant="outline">
        <CiLogout/>
      </Button>
    </form>
  );
}
