import { auth } from "@/auth";
import InputForm from "@/components/ui/input-form";
import "@/envConfig";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (session?.user?.email === process.env.ADMIN_MAIL) {
    return <InputForm />;
  }
  return redirect("/");
}
