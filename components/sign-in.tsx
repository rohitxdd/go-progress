import { signIn } from "@/auth";
import { Button } from "./ui/button";
import { FaGoogle } from "react-icons/fa";


export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button type="submit" variant="outline"><FaGoogle/></Button>
    </form>
  );
}