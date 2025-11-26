import SignOut from "@/components/button/SignOut";
import { auth } from "@/lib/auth"
import { headers } from "next/headers"


export default async function Page() {

    const session = await auth.api.getSession({
        headers: await headers()
    });

  return (
    <main className="w-full mx-auto">
        <h1>Welcome to the protected route!</h1>
        <SignOut/>
    </main>
  )
}